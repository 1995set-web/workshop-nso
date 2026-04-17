// ============================================================
//  PARTICIPANT MODE — main logic
// ============================================================

(function () {
  const slides = window.SLIDES;
  let currentIdx = 0;
  let showTaskOpen = false;
  let copyDropdownOpen = false;

  // ── DOM refs ──────────────────────────────────────────────
  const slideContainer  = document.getElementById('slide-container');
  const progressFill    = document.getElementById('progress-fill');
  const slideCounter    = document.getElementById('slide-counter');
  const onlineBadge     = document.getElementById('online-count');
  const copyBtn         = document.getElementById('copy-btn');
  const copyDropdown    = document.getElementById('copy-dropdown');
  const taskPanel       = document.getElementById('task-panel');
  const taskClose       = document.getElementById('task-close');
  const taskContent     = document.getElementById('task-content');
  const artifactsBtn    = document.getElementById('artifacts-btn');
  const artifactsPanel  = document.getElementById('artifacts-panel');
  const artifactsClose  = document.getElementById('artifacts-close');
  const demoOverlay     = document.getElementById('demo-overlay');
  const qaTrigger       = document.getElementById('qa-fab');
  const qaPanel         = document.getElementById('qa-panel');
  const qaSend          = document.getElementById('qa-send');
  const qaTextarea      = document.getElementById('qa-textarea');
  const builderFab      = document.getElementById('builder-fab');
  const builderPanel    = document.getElementById('builder-panel');
  const builderClose    = document.getElementById('builder-close');
  const notepadFab      = document.getElementById('notepad-fab');
  const notepadPanel    = document.getElementById('notepad-panel');
  const notepadTextarea = document.getElementById('notepad-textarea');
  const notepadClear    = document.getElementById('notepad-clear');
  const blockName       = document.getElementById('block-name');
  const toast           = document.getElementById('toast');
  const headerBlockName = document.getElementById('header-block-name');

  // ── Build slides in DOM ───────────────────────────────────
  function buildSlides() {
    slideContainer.innerHTML = '';
    slides.forEach((slide, i) => {
      const div = document.createElement('div');
      div.className = 'slide' + (i === 0 ? ' active' : '');
      div.id = 'slide-' + i;
      div.dataset.slideId = slide.id;
      div.innerHTML = slide.html;
      slideContainer.appendChild(div);
    });
  }

  // ── Show slide ────────────────────────────────────────────
  function showSlide(idx) {
    if (idx < 0 || idx >= slides.length) return;
    const prev = currentIdx;
    currentIdx = idx;

    document.querySelectorAll('.slide').forEach((el, i) => {
      el.classList.remove('active', 'prev');
      if (i === idx) el.classList.add('active');
      else if (i === prev) el.classList.add('prev');
    });

    // Progress bar
    const pct = ((idx + 1) / slides.length * 100).toFixed(1);
    progressFill.style.width = pct + '%';

    // Counter
    slideCounter.textContent = (idx + 1) + ' / ' + slides.length;

    // Block info
    const slide = slides[idx];
    if (blockName) blockName.textContent = slide.blockName;
    if (headerBlockName) headerBlockName.textContent = slide.blockName;

    // Copy button visibility
    const hasCopy = slide.prompts && slide.prompts.length > 0;
    copyBtn.style.display = hasCopy ? 'flex' : 'none';
    copyBtn.classList.remove('copied');
    copyBtn.querySelector('.copy-btn-text').textContent = '📋 Скопировать промпт';
  }

  // ── Sync ──────────────────────────────────────────────────
  function setupSync() {
    // Firebase real-time sync
    window.Sync.on('session/currentSlide', (val) => {
      if (val !== null && val !== currentIdx) showSlide(val);
    });
    window.Sync.on('session/showTask', (val) => {
      const open = val === true;
      if (open !== showTaskOpen) toggleTask(open);
    });
    window.Sync.on('session/demoMode', (val) => {
      demoOverlay.classList.toggle('active', val === true);
    });

    // Slide content overrides from speaker editor
    window.Sync.on('session/slideOverrides', (overrides) => {
      if (!overrides) return;
      Object.entries(overrides).forEach(([idxStr, html]) => {
        const i = parseInt(idxStr, 10);
        if (i >= 0 && i < slides.length && html) {
          slides[i].html = html;
          const el = document.getElementById('slide-' + i);
          if (el) el.innerHTML = html;
        }
      });
    });

    // Local mode fallback
    if (window.LOCAL_MODE) {
      window.addEventListener('sync:session:currentSlide', (e) => showSlide(e.detail));
      window.addEventListener('sync:session:showTask',     (e) => toggleTask(e.detail === true));
      window.addEventListener('sync:session:demoMode',     (e) => demoOverlay.classList.toggle('active', e.detail === true));
    }

    // Presence
    window.Sync.trackPresence((count) => {
      if (onlineBadge) onlineBadge.textContent = count;
    });
  }

  // ── Copy prompt ───────────────────────────────────────────
  function buildCopyDropdown() {
    const slide = slides[currentIdx];
    if (!slide.prompts || slide.prompts.length === 0) return;

    copyDropdown.innerHTML = '';
    if (slide.prompts.length === 1) {
      doCopy(slide.prompts[0].text, slide.prompts[0].label);
      return;
    }
    slide.prompts.forEach((p) => {
      const el = document.createElement('div');
      el.className = 'copy-option';
      el.innerHTML = `<span class="copy-option-label">${p.label}</span><span class="copy-option-icon">📋</span>`;
      el.addEventListener('click', () => {
        doCopy(p.text, p.label);
        closeCopyDropdown();
      });
      copyDropdown.appendChild(el);
    });
  }

  function openCopyDropdown() {
    if (!copyDropdownOpen) {
      buildCopyDropdown();
      const slide = slides[currentIdx];
      if (slide.prompts && slide.prompts.length > 1) {
        const rect = copyBtn.getBoundingClientRect();
        copyDropdown.style.left = rect.left + 'px';
        copyDropdown.classList.add('visible');
        copyDropdownOpen = true;
      }
    } else {
      closeCopyDropdown();
    }
  }

  function closeCopyDropdown() {
    copyDropdown.classList.remove('visible');
    copyDropdownOpen = false;
  }

  function doCopy(text, label) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Скопировано: ' + label);
      copyBtn.classList.add('copied');
      copyBtn.querySelector('.copy-btn-text').textContent = '✓ Скопировано!';
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.querySelector('.copy-btn-text').textContent = '📋 Скопировать промпт';
      }, 2000);
    }).catch(() => {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('Скопировано!');
    });
  }

  // ── Task panel ────────────────────────────────────────────
  function toggleTask(open) {
    showTaskOpen = open;
    taskPanel.classList.toggle('open', open);
    if (open) {
      const slide = slides[currentIdx];
      if (slide.taskHtml && taskContent) taskContent.innerHTML = slide.taskHtml;
    }
  }

  // ── Artifacts panel ───────────────────────────────────────
  function buildArtifacts() {
    const container = document.getElementById('artifacts-content');
    const tabsEl    = document.getElementById('artifact-tabs');
    if (!container || !tabsEl) return;

    const arts = window.ARTIFACTS;
    const keys = Object.keys(arts);
    let activeKey = keys[0];

    function renderArtifact(key) {
      const art = arts[key];
      container.innerHTML = `<div class="artifact-content">` +
        art.sections.map(s => `
          <div class="artifact-section">
            <div class="artifact-section-title">${s.title}</div>
            <div class="artifact-section-sub">${s.subtitle}</div>
            <div class="artifact-section-body">${s.content}</div>
          </div>`).join('') +
        `</div>`;
    }

    tabsEl.innerHTML = keys.map(k => `
      <button class="artifact-tab ${k === activeKey ? 'active' : ''}" data-key="${k}">Артефакт ${k}</button>
    `).join('');

    tabsEl.querySelectorAll('.artifact-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        activeKey = btn.dataset.key;
        tabsEl.querySelectorAll('.artifact-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderArtifact(activeKey);
      });
    });

    renderArtifact(activeKey);
  }

  // ── Prompt builder ────────────────────────────────────────
  function setupBuilder() {
    const fields = ['role', 'context', 'task', 'format', 'constraint'];
    const preview = document.getElementById('builder-preview');
    const copyBtnB = document.getElementById('builder-copy-btn');

    function updatePreview() {
      const parts = fields.map(f => {
        const el = document.getElementById('builder-' + f);
        const labels = { role: 'Роль', context: 'Контекст', task: 'Задача', format: 'Формат', constraint: 'Ограничение' };
        return el && el.value.trim() ? `${labels[f]}: ${el.value.trim()}` : null;
      }).filter(Boolean);
      if (preview) preview.textContent = parts.join('\n\n') || 'Заполните поля выше...';
    }

    fields.forEach(f => {
      const el = document.getElementById('builder-' + f);
      if (el) el.addEventListener('input', updatePreview);
    });

    if (copyBtnB) {
      copyBtnB.addEventListener('click', () => {
        const text = preview ? preview.textContent : '';
        if (text && text !== 'Заполните поля выше...') {
          doCopy(text, 'Составной промпт');
        }
      });
    }
  }

  // ── Notepad (localStorage) ────────────────────────────────
  function setupNotepad() {
    const saved = localStorage.getItem('workshop-nso-notes');
    if (saved && notepadTextarea) notepadTextarea.value = saved;
    if (notepadTextarea) {
      notepadTextarea.addEventListener('input', () => {
        localStorage.setItem('workshop-nso-notes', notepadTextarea.value);
      });
    }
    if (notepadClear) {
      notepadClear.addEventListener('click', () => {
        if (confirm('Очистить заметки?')) {
          notepadTextarea.value = '';
          localStorage.removeItem('workshop-nso-notes');
        }
      });
    }
  }

  // ── Toast ─────────────────────────────────────────────────
  let toastTimer = null;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 2500);
  }

  // ── Event listeners ───────────────────────────────────────
  function setupListeners() {
    // Copy button
    copyBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      const slide = slides[currentIdx];
      if (slide.prompts?.length === 1) {
        doCopy(slide.prompts[0].text, slide.prompts[0].label);
      } else {
        openCopyDropdown();
      }
    });

    // Close dropdown on outside click
    document.addEventListener('click', () => closeCopyDropdown());
    copyDropdown?.addEventListener('click', (e) => e.stopPropagation());

    // Task close
    taskClose?.addEventListener('click', () => toggleTask(false));

    // Artifacts
    artifactsBtn?.addEventListener('click', () => {
      artifactsPanel?.classList.add('open');
    });
    artifactsClose?.addEventListener('click', () => {
      artifactsPanel?.classList.remove('open');
    });

    // Q&A
    qaTrigger?.addEventListener('click', () => {
      qaPanel?.classList.toggle('open');
    });
    qaSend?.addEventListener('click', () => {
      const text = qaTextarea?.value.trim();
      if (!text) return;
      window.Sync.push('questions', { text, ts: Date.now(), answered: false });
      qaTextarea.value = '';
      qaPanel?.classList.remove('open');
      showToast('Вопрос отправлен!');
    });

    // Builder
    builderFab?.addEventListener('click', () => {
      builderPanel?.classList.toggle('open');
      notepadPanel?.classList.remove('open');
    });
    builderClose?.addEventListener('click', () => builderPanel?.classList.remove('open'));

    // Notepad
    notepadFab?.addEventListener('click', () => {
      notepadPanel?.classList.toggle('open');
      builderPanel?.classList.remove('open');
    });

    // ── Mobile action bar ──────────────────────────────────
    document.getElementById('mob-qa')?.addEventListener('click', () => {
      qaPanel?.classList.toggle('open');
    });
    document.getElementById('mob-builder')?.addEventListener('click', () => {
      builderPanel?.classList.toggle('open');
      notepadPanel?.classList.remove('open');
    });
    document.getElementById('mob-notepad')?.addEventListener('click', () => {
      notepadPanel?.classList.toggle('open');
      builderPanel?.classList.remove('open');
    });

    // Reactions
    document.querySelectorAll('.reaction-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.reaction;
        window.Sync.push('reactions', { type, ts: Date.now() });
        // local visual feedback
        btn.style.transform = 'scale(1.3)';
        setTimeout(() => btn.style.transform = '', 300);
        showToast('Реакция отправлена');
      });
    });

    // Touch swipe (mobile)
    let touchStartX = 0;
    slideContainer?.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    slideContainer?.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 60) {
        // In participant mode, ignore manual swipe — slides are speaker-controlled
        // But allow if LOCAL_MODE
        if (window.LOCAL_MODE) {
          if (dx < 0) nextSlide();
          else prevSlide();
        }
      }
    });

    // Keyboard (for LOCAL_MODE / testing)
    if (window.LOCAL_MODE) {
      document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      });
    }
  }

  function nextSlide() {
    if (currentIdx < slides.length - 1) showSlide(currentIdx + 1);
  }
  function prevSlide() {
    if (currentIdx > 0) showSlide(currentIdx - 1);
  }

  // ── Bootstrap ─────────────────────────────────────────────
  function init() {
    buildSlides();
    showSlide(0);
    buildArtifacts();
    setupBuilder();
    setupNotepad();
    setupListeners();
    window.Sync.init();
    setupSync();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
