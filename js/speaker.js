// ============================================================
//  SPEAKER MODE — control panel logic
// ============================================================

(function () {
  const slides  = window.SLIDES;
  const blocks  = window.BLOCKS;
  let currentIdx    = 0;
  let showTask      = false;
  let demoMode      = false;
  let timerInterval = null;
  let timerSecs     = 0;
  let timerRunning  = false;
  let currentBlock  = 0;
  let reactions     = { '👍': 0, '🤔': 0, '⚡': 0 };

  // ── DOM refs ──────────────────────────────────────────────
  const pinModal        = document.getElementById('pin-modal');
  const pinInput        = document.getElementById('pin-input');
  const pinSubmit       = document.getElementById('pin-submit');
  const pinError        = document.getElementById('pin-error');
  const filmstrip       = document.getElementById('filmstrip');
  const previewContainer= document.getElementById('preview-container');
  const spSlideInfo     = document.getElementById('sp-slide-info');
  const btnPrev         = document.getElementById('sp-prev');
  const btnNext         = document.getElementById('sp-next');
  const spBlockName     = document.getElementById('sp-block-name');
  const timerDisplay    = document.getElementById('timer-display');
  const timerBlockName  = document.getElementById('timer-block-name');
  const headerTimer     = document.getElementById('sp-header-timer');
  const participantCount= document.getElementById('sp-participants-count');
  const spOnlineCount   = document.getElementById('sp-online-count');
  const toggleTask      = document.getElementById('toggle-task');
  const toggleDemo      = document.getElementById('toggle-demo');
  const notesEl         = document.getElementById('sp-notes');
  const qaInbox         = document.getElementById('qa-inbox');
  const copyPromptBtn   = document.getElementById('sp-copy-prompt');
  const promptSelect    = document.getElementById('sp-prompt-select');

  // ── PIN check ─────────────────────────────────────────────
  function checkPin() {
    const stored = sessionStorage.getItem('speaker-auth');
    if (stored === 'ok') { pinModal.style.display = 'none'; return; }
    pinModal.style.display = 'flex';
    pinInput.focus();
  }

  pinSubmit?.addEventListener('click', () => {
    if (pinInput.value === String(window.SPEAKER_PIN)) {
      sessionStorage.setItem('speaker-auth', 'ok');
      pinModal.style.display = 'none';
    } else {
      pinError.textContent = 'Неверный PIN';
      pinInput.value = '';
      pinInput.focus();
    }
  });
  pinInput?.addEventListener('keydown', (e) => { if (e.key === 'Enter') pinSubmit.click(); });

  // ── Build filmstrip ───────────────────────────────────────
  function buildFilmstrip() {
    if (!filmstrip) return;
    filmstrip.innerHTML = '';
    slides.forEach((slide, i) => {
      const div = document.createElement('div');
      div.className = 'filmstrip-item' + (i === 0 ? ' active' : '');
      div.innerHTML = `
        <div class="filmstrip-num">${i + 1}</div>
        <div class="filmstrip-block">${slide.blockName}</div>
        <div class="filmstrip-title">${getSlideTitle(slide)}</div>`;
      div.addEventListener('click', () => goToSlide(i));
      filmstrip.appendChild(div);
    });
  }

  function getSlideTitle(slide) {
    // extract first heading from html
    const m = slide.html.match(/<(?:h[12]|div class="s-heading"|div class="s-main-title[^"]*")[^>]*>([^<]{1,40})/i);
    return m ? m[1].replace(/&[a-z]+;/g, '') : `Слайд ${slide.id}`;
  }

  // ── Render slide preview ──────────────────────────────────
  function renderPreview(idx) {
    if (!previewContainer) return;
    previewContainer.innerHTML = '';
    const slideEl = document.createElement('div');
    slideEl.className = 'slide active';
    slideEl.style.cssText = 'position:relative;transform:none;font-size:0.68em;';
    slideEl.innerHTML = slides[idx].html;
    previewContainer.appendChild(slideEl);
  }

  // ── Navigate ──────────────────────────────────────────────
  function goToSlide(idx) {
    if (idx < 0 || idx >= slides.length) return;
    currentIdx = idx;

    // Update filmstrip
    document.querySelectorAll('.filmstrip-item').forEach((el, i) => {
      el.classList.toggle('active', i === idx);
    });
    // Scroll filmstrip to active
    const activeItem = filmstrip?.querySelector('.filmstrip-item.active');
    if (activeItem) activeItem.scrollIntoView({ block: 'nearest' });

    renderPreview(idx);

    // Update info
    if (spSlideInfo) spSlideInfo.textContent = (idx + 1) + ' / ' + slides.length;
    if (btnPrev)     btnPrev.disabled = idx === 0;
    if (btnNext)     btnNext.disabled = idx === slides.length - 1;

    const slide = slides[idx];
    if (spBlockName) spBlockName.textContent = slide.blockName;
    if (notesEl) notesEl.textContent = slide.speakerNotes || '—';

    // Build prompt selector
    buildPromptSelector(slide);

    // Auto-start timer block
    const blockForSlide = blocks.filter(b => b.startSlide <= slide.id).pop();
    if (blockForSlide && blockForSlide.id !== currentBlock) {
      setBlock(blockForSlide.id);
    }

    // Sync to Firebase/local
    window.Sync.set('session/currentSlide', idx);
    window.Sync.set('session/showTask', false);
    showTask = false;
    updateToggleUI();
  }

  // ── Prompt selector ───────────────────────────────────────
  function buildPromptSelector(slide) {
    if (!promptSelect) return;
    promptSelect.innerHTML = '';
    if (!slide.prompts || slide.prompts.length === 0) {
      promptSelect.innerHTML = '<option>— нет промптов на этом слайде —</option>';
      if (copyPromptBtn) copyPromptBtn.disabled = true;
      return;
    }
    if (copyPromptBtn) copyPromptBtn.disabled = false;
    slide.prompts.forEach((p, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = p.label;
      promptSelect.appendChild(opt);
    });
  }

  copyPromptBtn?.addEventListener('click', () => {
    const slide = slides[currentIdx];
    const idx   = parseInt(promptSelect.value, 10);
    const text  = slide.prompts?.[idx]?.text;
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      copyPromptBtn.textContent = '✓ Скопировано!';
      setTimeout(() => copyPromptBtn.textContent = '📋 Скопировать промпт', 2000);
    });
  });

  // ── Timer ─────────────────────────────────────────────────
  function setBlock(blockId) {
    const block = blocks[blockId];
    if (!block) return;
    currentBlock = blockId;
    timerSecs    = block.duration * 60;
    timerRunning = false;
    clearInterval(timerInterval);
    if (timerBlockName) timerBlockName.textContent = block.name;
    if (spBlockName)    spBlockName.textContent    = block.name;
    updateTimerDisplay();
  }

  function startTimer() {
    if (timerRunning) return;
    timerRunning = true;
    timerInterval = setInterval(() => {
      timerSecs--;
      updateTimerDisplay();
    }, 1000);
  }
  function pauseTimer() {
    timerRunning = false;
    clearInterval(timerInterval);
  }
  function resetTimer() {
    pauseTimer();
    const block = blocks[currentBlock];
    if (block) timerSecs = block.duration * 60;
    updateTimerDisplay();
  }

  function updateTimerDisplay() {
    const abs  = Math.abs(timerSecs);
    const neg  = timerSecs < 0 ? '−' : '';
    const m    = String(Math.floor(abs / 60)).padStart(2, '0');
    const s    = String(abs % 60).padStart(2, '0');
    const txt  = `${neg}${m}:${s}`;
    if (timerDisplay) {
      timerDisplay.textContent = txt;
      timerDisplay.className = 'timer-display ' + (
        timerSecs < 0 ? 'timer-overtime' :
        timerSecs < 120 ? 'timer-warning' : 'timer-running'
      );
    }
    if (headerTimer) {
      headerTimer.textContent = txt;
      headerTimer.className = 'sp-header-timer ' + (
        timerSecs < 0 ? 'timer-overtime' :
        timerSecs < 120 ? 'timer-warning' : 'timer-running'
      );
    }
  }

  // ── Toggles ───────────────────────────────────────────────
  function updateToggleUI() {
    if (toggleTask) {
      toggleTask.classList.toggle('active', showTask);
      toggleTask.querySelector('.sp-toggle-state').textContent = showTask ? 'Открыто ✓' : 'Закрыто';
    }
    if (toggleDemo) {
      toggleDemo.classList.toggle('demo-active', demoMode);
      toggleDemo.querySelector('.sp-toggle-state').textContent = demoMode ? 'Включён ⚠️' : 'Выключен';
    }
  }

  toggleTask?.addEventListener('click', () => {
    const slide = slides[currentIdx];
    if (!slide.hasTask && !showTask) {
      alert('На этом слайде нет задания.');
      return;
    }
    showTask = !showTask;
    window.Sync.set('session/showTask', showTask);
    updateToggleUI();
  });

  toggleDemo?.addEventListener('click', () => {
    demoMode = !demoMode;
    window.Sync.set('session/demoMode', demoMode);
    updateToggleUI();
  });

  // ── Q&A inbox ─────────────────────────────────────────────
  function setupQAInbox() {
    if (!qaInbox) return;
    window.Sync.on('questions', (data) => {
      qaInbox.innerHTML = '';
      if (!data) { qaInbox.innerHTML = '<div class="qa-empty">Вопросов пока нет</div>'; return; }
      const items = Object.entries(data).reverse();
      items.forEach(([key, q]) => {
        const el = document.createElement('div');
        el.className = 'qa-item' + (q.answered ? ' answered' : '');
        el.innerHTML = `
          <div class="qa-item-text">${q.text}</div>
          <div class="qa-item-actions">
            <button class="qa-action-btn ${q.answered ? 'answered' : ''}" onclick="markAnswered('${key}', this)">
              ${q.answered ? '✓ Ответил' : 'Отметить как отвеченный'}
            </button>
          </div>`;
        qaInbox.appendChild(el);
      });
    });
    window.markAnswered = (key, btn) => {
      window.Sync.set('questions/' + key + '/answered', true);
      btn.textContent = '✓ Ответил';
      btn.classList.add('answered');
    };
  }

  // ── Reactions ─────────────────────────────────────────────
  function setupReactions() {
    window.Sync.on('reactions', (data) => {
      reactions = { '👍': 0, '🤔': 0, '⚡': 0 };
      if (data) {
        Object.values(data).forEach(r => {
          if (reactions[r.type] !== undefined) reactions[r.type]++;
        });
      }
      updateReactionCounts();
    });
  }

  function updateReactionCounts() {
    document.querySelectorAll('.reaction-summary-item').forEach(el => {
      const emoji = el.querySelector('.reaction-emoji')?.textContent;
      const count = el.querySelector('.reaction-count-num');
      if (emoji && count) count.textContent = reactions[emoji] || 0;
    });
  }

  // ── Presence ──────────────────────────────────────────────
  function setupPresence() {
    window.Sync.trackPresence((count) => {
      if (participantCount) participantCount.textContent = count;
      if (spOnlineCount)    spOnlineCount.textContent    = count;
    });
  }

  // ── Keyboard ──────────────────────────────────────────────
  function setupKeyboard() {
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goToSlide(currentIdx + 1); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); goToSlide(currentIdx - 1); }
      if (e.key === 't' || e.key === 'т') toggleTask?.click();
      if (e.key === 'd' || e.key === 'в') toggleDemo?.click();
      if (e.key === 's' || e.key === 'ы') { timerRunning ? pauseTimer() : startTimer(); }
    });
  }

  // ── Nav buttons ───────────────────────────────────────────
  btnPrev?.addEventListener('click', () => goToSlide(currentIdx - 1));
  btnNext?.addEventListener('click', () => goToSlide(currentIdx + 1));

  // Timer buttons
  document.getElementById('timer-start')?.addEventListener('click', startTimer);
  document.getElementById('timer-pause')?.addEventListener('click', pauseTimer);
  document.getElementById('timer-reset')?.addEventListener('click', resetTimer);
  document.querySelectorAll('.timer-block-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const blockId = parseInt(btn.dataset.block, 10);
      setBlock(blockId);
      pauseTimer();
    });
  });

  // ── Slide editor ──────────────────────────────────────────
  const editSlideBtn       = document.getElementById('edit-slide-btn');
  const slideEditorOverlay = document.getElementById('slide-editor-overlay');
  const slideEditorTA      = document.getElementById('slide-editor-textarea');
  const slideEditorSync    = document.getElementById('slide-editor-sync');
  const slideEditorApply   = document.getElementById('slide-editor-apply');
  const slideEditorCancel  = document.getElementById('slide-editor-cancel');

  function openEditor() {
    if (!slideEditorTA) return;
    slideEditorTA.value = slides[currentIdx].html;
    slideEditorOverlay.style.display = 'flex';
  }

  function applyEdit(sync) {
    const newHtml = slideEditorTA.value;
    slides[currentIdx].html = newHtml;
    renderPreview(currentIdx);
    // Rebuild filmstrip title for this slide
    const filmItem = filmstrip?.querySelectorAll('.filmstrip-item')[currentIdx];
    if (filmItem) filmItem.querySelector('.filmstrip-title').textContent = getSlideTitle(slides[currentIdx]);

    if (sync) {
      window.Sync.set('session/slideOverrides/' + currentIdx, newHtml);
      showEditorToast('Синхронизировано с участниками ✓');
    }
    slideEditorOverlay.style.display = 'none';
  }

  function showEditorToast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('visible');
    setTimeout(() => t.classList.remove('visible'), 2500);
  }

  editSlideBtn?.addEventListener('click', openEditor);
  slideEditorSync?.addEventListener('click', () => applyEdit(true));
  slideEditorApply?.addEventListener('click', () => applyEdit(false));
  slideEditorCancel?.addEventListener('click', () => { slideEditorOverlay.style.display = 'none'; });

  // ── Bootstrap ─────────────────────────────────────────────
  function init() {
    checkPin();
    window.Sync.init();
    buildFilmstrip();
    goToSlide(0);
    setBlock(0);
    setupQAInbox();
    setupReactions();
    setupPresence();
    setupKeyboard();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
