// ============================================================
//  ДАННЫЕ СЛАЙДОВ — все 37 слайдов воркшопа
//  Структура: { id, type, block, blockName, html, speakerNotes, prompts[], taskHtml, hasTask }
// ============================================================

window.SLIDES = [

// ─────────── ТИТУЛ ───────────
{
  id: 1, type: 'title', block: 0, blockName: 'Открытие',
  html: `
    <div class="s-title">
      <div class="s-eyebrow">22 апреля 2026 · Школа 21 · Новосибирск</div>
      <h1 class="s-main-title gradient-text">ИИ ×<br>ПРАВИТЕЛЬСТВО НСО</h1>
      <p class="s-sub">Практикум: от промпта до результата</p>
      <div class="s-stats">
        <span>⏱ 3 часа</span>
        <span>👥 35 участников</span>
        <span>🧠 80% практики</span>
      </div>
    </div>`,
  speakerNotes: 'Открыть с живого демо. Спросить: "Кто уже использовал ИИ на этой неделе?" — поднятые руки. Не объяснять — сразу показывать.',
  prompts: [], hasTask: false,
},

// ─────────── ТАЙМИНГ ───────────
{
  id: 2, type: 'content', block: 0, blockName: 'Открытие',
  html: `
    <div class="s-content">
      <h2 class="s-heading">ПЛАН НА СЕГОДНЯ</h2>
      <div class="s-schedule">
        <div class="sched-item"><span class="sched-time">10:00</span><span class="sched-title">Живое демо-открытие</span><span class="sched-dur">5 мин</span></div>
        <div class="sched-item"><span class="sched-time">10:05</span><span class="sched-title sched-block">Блок 1 · Контекст + Матрёшка ИИ</span><span class="sched-dur">15 мин</span></div>
        <div class="sched-item"><span class="sched-time">10:20</span><span class="sched-title sched-block">Блок 2 · Карта инструментов</span><span class="sched-dur">12 мин</span></div>
        <div class="sched-item"><span class="sched-time">10:32</span><span class="sched-title sched-block">Блок 3 · Промпты + Демо 1 + Практика</span><span class="sched-dur">38 мин</span></div>
        <div class="sched-item"><span class="sched-time">11:10</span><span class="sched-title sched-block">Блок 4 · Анализ документов + Практика</span><span class="sched-dur">25 мин</span></div>
        <div class="sched-item break-item"><span class="sched-time">11:35</span><span class="sched-title">☕ ПЕРЕРЫВ</span><span class="sched-dur">15 мин</span></div>
        <div class="sched-item"><span class="sched-time">11:50</span><span class="sched-title sched-block">Блок 5 · Демо + Gamma + Практика</span><span class="sched-dur">30 мин</span></div>
        <div class="sched-item"><span class="sched-time">12:20</span><span class="sched-title sched-block">Блок 6 · Системные промпты</span><span class="sched-dur">15 мин</span></div>
        <div class="sched-item"><span class="sched-time">12:35</span><span class="sched-title sched-block">Блок 7 · Шпаргалка + Обучение + Финал</span><span class="sched-dur">25 мин</span></div>
        <div class="sched-item"><span class="sched-time">13:00</span><span class="sched-title">Конец</span><span class="sched-dur">—</span></div>
      </div>
    </div>`,
  speakerNotes: 'Показать план. Подчеркнуть: 80% практики. Каждый блок заканчивается реальной задачей.',
  prompts: [], hasTask: false,
},

// ─────────── БЛОК 1 ХЕДЕР ───────────
{
  id: 3, type: 'block-header', block: 1, blockName: 'Блок 1',
  html: `
    <div class="s-block-header">
      <div class="s-block-number">01</div>
      <h1 class="s-block-title">КОНТЕКСТ<br><span class="green-text">+ МАТРЁШКА ИИ</span></h1>
      <div class="s-block-time">15 минут</div>
    </div>`,
  speakerNotes: 'Короткий блок — только контекст и понимание терминов. Без лирики.',
  prompts: [], hasTask: false,
},

// ─────────── ЧТО УЖЕ РАБОТАЕТ ───────────
{
  id: 4, type: 'table', block: 1, blockName: 'Блок 1',
  html: `
    <div class="s-content">
      <h2 class="s-heading">ЧТО УЖЕ РАБОТАЕТ В РЕГИОНАХ РОССИИ</h2>
      <table class="s-table">
        <thead><tr><th>Ведомство / регион</th><th>Что сделали</th><th>Результат</th></tr></thead>
        <tbody>
          <tr><td>Минфин РФ + Сбер</td><td>ИИ-агент для бюджетного процесса</td><td><span class="result-good">−70% времени на рутину</span></td></tr>
          <tr><td>Госуслуги (Робот Макс)</td><td>LLM-бот вместо оператора</td><td><span class="result-good">2 млн консультаций в день</span></td></tr>
          <tr><td>Росреестр</td><td>ИИ-обработка запросов</td><td><span class="result-good">Выписка за &lt;2 секунды (раньше часы)</span></td></tr>
          <tr><td>Здравоохранение</td><td>ИИ-помощник для документации</td><td><span class="result-good">92 → 48 мин на приём</span></td></tr>
          <tr><td>Москва</td><td>Видеоаналитика</td><td><span class="result-good">70% преступлений раскрываются с ИИ</span></td></tr>
        </tbody>
      </table>
      <div class="s-quote">"Мы не начинаем с нуля. Вопрос — как вы лично используете это каждый день."</div>
    </div>`,
  speakerNotes: 'Пройтись по таблице быстро. Акцент на последнюю цитату — это переход к практике.',
  prompts: [], hasTask: false,
},

// ─────────── НСО ───────────
{
  id: 5, type: 'content', block: 1, blockName: 'Блок 1',
  html: `
    <div class="s-content">
      <h2 class="s-heading">НСО: МЫ УЖЕ В ПОВЕСТКЕ</h2>
      <div class="s-cards-grid">
        <div class="s-card purple-border">
          <div class="s-card-num">№6</div>
          <div class="s-card-text">Топ-6 регионов России<br>по цифровизации (2024)</div>
        </div>
        <div class="s-card green-border">
          <div class="s-card-icon">🤖</div>
          <div class="s-card-text">Минцифры НСО запустило ИИ-помощника для чиновников (Habr, 2025)</div>
        </div>
        <div class="s-card purple-border">
          <div class="s-card-icon">🎓</div>
          <div class="s-card-text">НГУ — один из 6 вузов с господдержкой на центр ИИ</div>
        </div>
        <div class="s-card green-border highlight-card">
          <div class="s-card-icon">⚡</div>
          <div class="s-card-text"><strong>Апрель 2026:</strong> при Президенте создана Комиссия по развитию ИИ — ведомства отчитываются</div>
        </div>
      </div>
    </div>`,
  speakerNotes: 'Показать что НСО не отстаёт. Последняя карточка — политическая реальность: ИИ в повестке у Президента.',
  prompts: [], hasTask: false,
},

// ─────────── МАТРЁШКА ───────────
{
  id: 6, type: 'content', block: 1, blockName: 'Блок 1',
  html: `
    <div class="s-content">
      <h2 class="s-heading">МАТРЁШКА ИИ: ЧТО ВНУТРИ</h2>
      <div class="s-matryoshka">
        <div class="maty-layer l1"><span class="maty-label">ПРИЛОЖЕНИЯ И СЕРВИСЫ</span><span class="maty-examples">GigaChat · Алиса · Gamma · Сократ · Qwen</span><span class="maty-note">← Это видите вы</span></div>
        <div class="maty-layer l2"><span class="maty-label">БОЛЬШИЕ ЯЗЫКОВЫЕ МОДЕЛИ (LLM)</span><span class="maty-examples">GPT-4 · LLaMA · DeepSeek · Qwen · GigaChat</span><span class="maty-note">← Мозг приложения</span></div>
        <div class="maty-layer l3"><span class="maty-label">ГЕНЕРАТИВНЫЙ ИИ</span><span class="maty-examples">Модели, создающие новый контент: текст, изображения</span></div>
        <div class="maty-layer l4"><span class="maty-label">ГЛУБОКОЕ ОБУЧЕНИЕ</span><span class="maty-examples">Нейронные сети с множеством слоёв</span></div>
        <div class="maty-layer l5"><span class="maty-label">МАШИННОЕ ОБУЧЕНИЕ</span><span class="maty-examples">Алгоритмы, улучшающиеся на опыте</span></div>
        <div class="maty-layer l6"><span class="maty-label">ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ</span><span class="maty-examples">Любая система, имитирующая когнитивные функции</span></div>
      </div>
      <div class="s-quote">LLM не думает — он предсказывает следующее слово на основе статистики. Чем точнее промпт — тем лучше результат.</div>
    </div>`,
  speakerNotes: 'Объяснить снаружи внутрь. Ключевая мысль: LLM = статистика, не интеллект. Поэтому промпт = инструкция для статистической машины.',
  prompts: [], hasTask: false,
},

// ─────────── АНАЛОГИЯ ───────────
{
  id: 7, type: 'table', block: 1, blockName: 'Блок 1',
  html: `
    <div class="s-content">
      <h2 class="s-heading">АНАЛОГИЯ ДЛЯ РУКОВОДИТЕЛЯ</h2>
      <table class="s-table s-table-2col">
        <thead><tr><th>Технология</th><th>Аналогия</th></tr></thead>
        <tbody>
          <tr><td><span class="purple-text">ИИ</span></td><td>Транспорт вообще</td></tr>
          <tr><td><span class="purple-text">Machine Learning</span></td><td>Двигатель внутреннего сгорания</td></tr>
          <tr><td><span class="purple-text">LLM</span></td><td>Конкретный движок</td></tr>
          <tr><td><span class="purple-text">GigaChat / Qwen</span></td><td>Готовый автомобиль с этим движком</td></tr>
          <tr><td><span class="purple-text">Gamma / Сократ</span></td><td>Такси по конкретному маршруту</td></tr>
        </tbody>
      </table>
    </div>`,
  speakerNotes: 'Простая таблица — участники сразу понимают иерархию. Быстро пройти и двигаться дальше.',
  prompts: [], hasTask: false,
},

// ─────────── БЛОК 2 ───────────
{
  id: 8, type: 'block-header', block: 2, blockName: 'Блок 2',
  html: `
    <div class="s-block-header">
      <div class="s-block-number">02</div>
      <h1 class="s-block-title">КАРТА ИНСТРУМЕНТОВ<br><span class="green-text">+ АССИСТЕНТЫ VS АГЕНТЫ</span></h1>
      <div class="s-block-time">12 минут</div>
    </div>`,
  speakerNotes: 'Быстрый блок. Участники должны знать конкретные инструменты и уметь открыть их прямо сейчас.',
  prompts: [], hasTask: false,
},

// ─────────── КАРТА ИНСТРУМЕНТОВ ───────────
{
  id: 9, type: 'tools', block: 2, blockName: 'Блок 2',
  html: `
    <div class="s-content">
      <h2 class="s-heading">КАРТА ИНСТРУМЕНТОВ</h2>
      <div class="s-tools-grid">
        <div class="tool-category">
          <div class="tool-cat-name">💬 Текстовые ассистенты</div>
          <a href="https://chat.qwen.ai" target="_blank" class="tool-link">Qwen <span class="tool-note">chat.qwen.ai</span></a>
          <a href="https://giga.chat" target="_blank" class="tool-link">GigaChat <span class="tool-note">giga.chat · данные в РФ</span></a>
          <a href="https://chat.deepseek.com" target="_blank" class="tool-link">DeepSeek <span class="tool-note">chat.deepseek.com</span></a>
          <a href="https://www.kimi.com" target="_blank" class="tool-link">Kimi <span class="tool-note">kimi.com</span></a>
          <a href="https://ya.ru/ai/gpt" target="_blank" class="tool-link">YandexGPT <span class="tool-note">ya.ru/ai/gpt</span></a>
        </div>
        <div class="tool-category">
          <div class="tool-cat-name">🔍 Поиск с ИИ</div>
          <a href="https://perplexity.ai" target="_blank" class="tool-link">Perplexity <span class="tool-note">perplexity.ai</span></a>
        </div>
        <div class="tool-category">
          <div class="tool-cat-name">📊 Презентации</div>
          <a href="https://gamma.app" target="_blank" class="tool-link">Gamma <span class="tool-note">gamma.app</span></a>
        </div>
        <div class="tool-category">
          <div class="tool-cat-name">📝 Расшифровка встреч</div>
          <a href="https://sokrat.ru" target="_blank" class="tool-link">Сократ (Сбер) <span class="tool-note">sokrat.ru</span></a>
          <a href="https://t.me/smartspeech_sber_bot" target="_blank" class="tool-link">SaluteBot <span class="tool-note">Telegram-бот</span></a>
        </div>
        <div class="tool-category">
          <div class="tool-cat-name">⚡ Приложения без кода</div>
          <a href="https://lovable.dev" target="_blank" class="tool-link">Lovable <span class="tool-note">lovable.dev</span></a>
          <a href="https://replit.com" target="_blank" class="tool-link">Replit <span class="tool-note">replit.com</span></a>
        </div>
      </div>
    </div>`,
  speakerNotes: 'Ссылки кликабельны у участников! Пусть сразу открывают Qwen. Подчеркнуть: GigaChat — данные остаются в РФ, важно для гостайны.',
  prompts: [], hasTask: false,
},

// ─────────── АССИСТЕНТЫ VS АГЕНТЫ ───────────
{
  id: 10, type: 'table', block: 2, blockName: 'Блок 2',
  html: `
    <div class="s-content">
      <h2 class="s-heading">АССИСТЕНТЫ vs АГЕНТЫ</h2>
      <table class="s-table">
        <thead><tr><th></th><th>ИИ-ассистент</th><th>ИИ-агент</th></tr></thead>
        <tbody>
          <tr><td class="row-label">Как работает</td><td>Отвечает на ваш вопрос</td><td>Самостоятельно выполняет последовательность действий</td></tr>
          <tr><td class="row-label">Инициатива</td><td>Вы задаёте каждый шаг</td><td>ИИ сам планирует и выполняет шаги</td></tr>
          <tr><td class="row-label">Примеры</td><td class="purple-text">Qwen, GigaChat, DeepSeek</td><td class="green-text">Агент, который мониторит новости и присылает дайджест</td></tr>
          <tr><td class="row-label">Контроль</td><td>Полный — вы видите каждый ответ</td><td>Частичный — ИИ действует, вы проверяете результат</td></tr>
          <tr><td class="row-label">Аналогия</td><td>Умный референт: вы ставите задачу, он выполняет</td><td>Автономный сотрудник: вы ставите цель, он сам планирует</td></tr>
          <tr><td class="row-label">Сегодня</td><td class="highlight-cell">✅ Наш уровень сегодня</td><td class="muted-cell">Продвинутый — следующий уровень</td></tr>
        </tbody>
      </table>
    </div>`,
  speakerNotes: '"Сегодня мы учимся работать с ассистентами. Это первый и самый важный шаг — прежде чем настраивать агентов, нужно освоить промпты."',
  prompts: [], hasTask: false,
},

// ─────────── БЛОК 3 ───────────
{
  id: 11, type: 'block-header', block: 3, blockName: 'Блок 3',
  html: `
    <div class="s-block-header">
      <div class="s-block-number">03</div>
      <h1 class="s-block-title">ТЕОРИЯ<br><span class="green-text">+ ДЕМО 1 + ПРАКТИКА</span></h1>
      <div class="s-block-time">38 минут</div>
    </div>`,
  speakerNotes: 'Самый большой блок. Галлюцинации → безопасность → структура промпта → секреты → демо → практика.',
  prompts: [], hasTask: false,
},

// ─────────── ГАЛЛЮЦИНАЦИИ ───────────
{
  id: 12, type: 'content', block: 3, blockName: 'Блок 3',
  html: `
    <div class="s-content">
      <h2 class="s-heading">ЛОВИМ ГАЛЛЮЦИНАЦИИ</h2>
      <div class="s-two-col">
        <div>
          <div class="col-title red-text">⚠️ Признаки галлюцинаций</div>
          <ul class="s-list red-list">
            <li>Обобщения без ссылок: «Исследования показывают...»</li>
            <li>Конкретные цифры без источника</li>
            <li>Уверенный ответ на вопрос без актуальных данных</li>
            <li>Внутренние противоречия в длинном тексте</li>
          </ul>
        </div>
        <div>
          <div class="col-title green-text">✅ Как бороться</div>
          <ul class="s-list green-list">
            <li>«Укажи источник или признай, что это обобщение»</li>
            <li>Читать критически — ИИ даёт <strong>черновик</strong>, не финал</li>
            <li>Проверять ключевые факты через официальные источники</li>
            <li>Добавлять: «Если не знаешь — скажи об этом, не придумывай»</li>
          </ul>
        </div>
      </div>
      <div class="s-quote golden">Золотое правило: любой текст от ИИ — черновик, который вы редактируете</div>
    </div>`,
  speakerNotes: 'Ключевой слайд. Подчеркнуть: ИИ уверен ВСЕГДА, даже когда ошибается. Это его природа.',
  prompts: [], hasTask: false,
},

// ─────────── МОЖНО/НЕЛЬЗЯ ───────────
{
  id: 13, type: 'table', block: 3, blockName: 'Блок 3',
  html: `
    <div class="s-content">
      <h2 class="s-heading">ЧТО МОЖНО И НЕЛЬЗЯ ДАВАТЬ ИИ</h2>
      <table class="s-table s-table-3col">
        <thead><tr><th class="green-header">✅ МОЖНО</th><th class="yellow-header">⚠️ СЕРАЯ ЗОНА</th><th class="red-header">🚫 НЕЛЬЗЯ</th></tr></thead>
        <tbody>
          <tr><td>Открытые нормативные акты</td><td>Внутренние документы без грифа (обезличить)</td><td>Документы с грифом ДСП и выше</td></tr>
          <tr><td>Статистика и публичные данные</td><td>Корреспонденция с федеральными ведомствами</td><td>Персональные данные граждан</td></tr>
          <tr><td>Обезличенные протоколы</td><td>Данные о сотрудниках (только агрегированные)</td><td>Сведения о критической инфраструктуре</td></tr>
          <tr><td>Ваши собственные черновики</td><td>Типовые процессы без деталей</td><td>Оперативная информация правоохранителей</td></tr>
          <tr><td>Тексты из открытых источников</td><td>—</td><td>Данные о системах безопасности</td></tr>
        </tbody>
      </table>
      <div class="s-quote">Для госслужбы: если документ нельзя опубликовать — не загружайте в публичный ИИ.<br>Для закрытых данных: <strong>GigaChat</strong> (данные остаются в РФ) или обезличенная версия.</div>
    </div>`,
  speakerNotes: 'Важнейший слайд для ЦА. Пройтись по каждой колонке. GigaChat — наш ответ на вопрос про ДСП.',
  prompts: [], hasTask: false,
},

// ─────────── СТРУКТУРА ПРОМПТА ───────────
{
  id: 14, type: 'content', block: 3, blockName: 'Блок 3',
  html: `
    <div class="s-content">
      <h2 class="s-heading">СТРУКТУРА ПРОМПТА</h2>
      <div class="s-formula">
        <span class="formula-item">РОЛЬ</span>
        <span class="formula-arrow">→</span>
        <span class="formula-item">КОНТЕКСТ</span>
        <span class="formula-arrow">→</span>
        <span class="formula-item">ЗАДАЧА</span>
        <span class="formula-arrow">→</span>
        <span class="formula-item">ФОРМАТ</span>
        <span class="formula-arrow">→</span>
        <span class="formula-item">ОГРАНИЧЕНИЕ</span>
      </div>
      <table class="s-table s-table-3col">
        <thead><tr><th>Элемент</th><th>Что писать</th><th>Пример</th></tr></thead>
        <tbody>
          <tr><td class="purple-text"><strong>РОЛЬ</strong></td><td>Кем должен быть ИИ</td><td class="code-text">«Ты — опытный спичрайтер Правительства НСО»</td></tr>
          <tr><td class="purple-text"><strong>КОНТЕКСТ</strong></td><td>Ситуация, вводные</td><td class="code-text">«Открытие онкоцентра, аудитория — врачи и гости»</td></tr>
          <tr><td class="purple-text"><strong>ЗАДАЧА</strong></td><td>Что конкретно сделать</td><td class="code-text">«Напиши торжественную речь на 5 минут»</td></tr>
          <tr><td class="purple-text"><strong>ФОРМАТ</strong></td><td>Как оформить</td><td class="code-text">«5 абзацев: личный зацеп → значимость → факты → призыв»</td></tr>
          <tr><td class="purple-text"><strong>ОГРАНИЧЕНИЕ</strong></td><td>Что нельзя</td><td class="code-text">«Без штампов "в непростое время", без выдуманных фактов»</td></tr>
        </tbody>
      </table>
    </div>`,
  speakerNotes: 'Это ядро всего воркшопа. Ссылаться на эту формулу весь день.',
  prompts: [], hasTask: false,
},

// ─────────── ПРОМПТ-СЕКРЕТЫ ───────────
{
  id: 15, type: 'content', block: 3, blockName: 'Блок 3',
  html: `
    <div class="s-content">
      <h2 class="s-heading">ПРОМПТ-СЕКРЕТЫ</h2>
      <div class="s-secrets-grid">
        <div class="secret-card"><div class="secret-chip">01</div><div class="secret-text"><strong>«Действуй шаг за шагом»</strong><br><span class="muted">ИИ рассуждает качественнее при пошаговом разборе</span></div></div>
        <div class="secret-card"><div class="secret-chip">02</div><div class="secret-text"><strong>«Руководствуйся только фактами»</strong><br><span class="muted">Снижает риск домыслов и галлюцинаций</span></div></div>
        <div class="secret-card"><div class="secret-chip">03</div><div class="secret-text"><strong>«Задай мне уточняющие вопросы»</strong><br><span class="muted">Помогает получить нужный результат с первой итерации</span></div></div>
        <div class="secret-card"><div class="secret-chip">04</div><div class="secret-text"><strong>«Проверь свой результат самостоятельно»</strong><br><span class="muted">ИИ находит собственные ошибки</span></div></div>
        <div class="secret-card"><div class="secret-chip">05</div><div class="secret-text"><strong>«Предложи 2–3 варианта»</strong><br><span class="muted">Когда задача неоднозначная — видите разные подходы</span></div></div>
        <div class="secret-card highlight-secret"><div class="secret-chip green-chip">⚡</div><div class="secret-text"><strong>Метапромпт:</strong><br><span class="code-text">«Составь для меня идеальный промпт под задачу: [описание]»</span></div></div>
      </div>
    </div>`,
  speakerNotes: 'Метапромпт — самый важный секрет. Когда не знаешь с чего начать — попроси ИИ написать промпт.',
  prompts: [], hasTask: false,
},

// ─────────── ДЕМО 1: ПЛОХОЙ ПРОМПТ ───────────
{
  id: 16, type: 'demo', block: 3, blockName: 'Блок 3',
  html: `
    <div class="s-content">
      <div class="demo-badge">ДЕМО 1 · Написание речи</div>
      <h2 class="s-heading">ПЛОХОЙ ПРОМПТ</h2>
      <div class="s-prompt-block bad-prompt">
        <div class="prompt-label">❌ Плохой промпт</div>
        <code>Напиши речь для открытия больницы</code>
      </div>
      <div class="demo-result-preview">
        <div class="result-label">Результат:</div>
        <p class="result-text muted">Уважаемые гости, коллеги и друзья! Сегодня знаменательный день — мы открываем новое медицинское учреждение. В трудное время, когда наша страна...</p>
        <div class="result-verdict bad">Generic. Шаблонный. Ни о чём.</div>
      </div>
    </div>`,
  speakerNotes: 'Открыть Qwen. Скопировать плохой промпт. Показать результат. Дать участникам увидеть насколько это бесполезно.',
  prompts: [
    { label: 'Плохой промпт (для демо)', text: 'Напиши речь для открытия больницы' }
  ],
  hasTask: false,
},

// ─────────── ДЕМО 1: ХОРОШИЙ ПРОМПТ ───────────
{
  id: 17, type: 'demo', block: 3, blockName: 'Блок 3',
  html: `
    <div class="s-content">
      <div class="demo-badge">ДЕМО 1 · Написание речи</div>
      <h2 class="s-heading">ХОРОШИЙ ПРОМПТ</h2>
      <div class="s-prompt-block good-prompt">
        <div class="prompt-label">✅ Структурированный промпт</div>
        <code>Роль: Ты — опытный спичрайтер Правительства Новосибирской области. Пишешь для первых лиц. Никаких канцеляризмов.

Контекст: 25 апреля 2026, торжественное открытие нового 4-этажного корпуса Новосибирского областного онкологического диспансера. Аудитория: медицинские работники, пациенты, федеральные гости. Ключевое сообщение: НСО вкладывает в здоровье людей — это не слова, это 840 млн рублей и 3 года строительства.

Задача: напиши торжественную речь.

Формат: 5 абзацев, ≈ 650 слов (5 минут чтения).
1. Открытие — личная деталь или история (не «дорогие коллеги»)
2. Что значит этот корпус для жителей НСО (2 абзаца)
3. Благодарности (имена в [квадратных скобках])
4. Призыв и завершение

Ограничение: без штампов («в непростое время», «хочу поблагодарить всех»). Факты не придумывать: корпус — 4 этажа, 840 млн руб., открывается 25 апреля. Всё остальное — общие слова.</code>
      </div>
      <div class="demo-tip">«Три секунды переписывать — три итерации до результата.»</div>
    </div>`,
  speakerNotes: 'Скопировать хороший промпт → показать результат → итерировать: "Сделай первый абзац короче, добавь конкретного пациента". Показать разницу.',
  prompts: [
    { label: 'Хороший промпт — речь онкоцентр', text: `Роль: Ты — опытный спичрайтер Правительства Новосибирской области. Пишешь для первых лиц. Никаких канцеляризмов.

Контекст: 25 апреля 2026, торжественное открытие нового 4-этажного корпуса Новосибирского областного онкологического диспансера. Аудитория: медицинские работники, пациенты, федеральные гости. Ключевое сообщение: НСО вкладывает в здоровье людей — это не слова, это 840 млн рублей и 3 года строительства.

Задача: напиши торжественную речь.

Формат: 5 абзацев, ≈ 650 слов (5 минут чтения).
1. Открытие — личная деталь или история (не «дорогие коллеги»)
2. Что значит этот корпус для жителей НСО (2 абзаца)
3. Благодарности (имена в [квадратных скобках])
4. Призыв и завершение

Ограничение: без штампов («в непростое время», «хочу поблагодарить всех»). Факты не придумывать: корпус — 4 этажа, 840 млн руб., открывается 25 апреля. Всё остальное — общие слова.` }
  ],
  hasTask: false,
},

// ─────────── ПРАКТИКА 1 ───────────
{
  id: 18, type: 'practice', block: 3, blockName: 'Блок 3',
  html: `
    <div class="s-content">
      <div class="demo-badge">ПРАКТИКА 1 · 15 минут</div>
      <h2 class="s-heading">ВЫБЕРИТЕ ЗАДАНИЕ</h2>
      <div class="s-practice-cards">
        <div class="practice-card">
          <div class="practice-letter">А</div>
          <div class="practice-title">Написание речи</div>
          <div class="practice-desc">2 мая, технопарк «НСО Иннотех», первый региональный центр стартапов. Речь губернатора на 7 минут. Факты: 3 200 м², 12 резидентов, якорный партнёр — Сбер.</div>
        </div>
        <div class="practice-card">
          <div class="practice-letter">Б</div>
          <div class="practice-title">Адаптация темы для граждан</div>
          <div class="practice-desc">С 1 июня отменяется льготный проезд для пенсионеров. Вместо него — 400 руб./мес через Госуслуги. Объяснить 3 аудиториям: пенсионер из Бердска, предприниматель, студент НГУ.</div>
        </div>
        <div class="practice-card">
          <div class="practice-letter">В</div>
          <div class="practice-title">Ответ на острое обращение</div>
          <div class="practice-desc">40 жителей Родников подписали обращение про детсад №317 (8 мес. закрыт). Факты: банкротство подрядчика, новый выбран 3 нед. назад, сдача — декабрь 2026.</div>
        </div>
      </div>
      <div class="practice-instruction">Напишите промпт по формуле: <strong>Роль → Контекст → Задача → Формат → Ограничение</strong></div>
    </div>`,
  speakerNotes: '15 минут. Ходите по залу, помогайте. Потом 3 человека показывают промпт и результат на большом экране.',
  prompts: [
    { label: 'Шаблон Задание А (речь)', text: `Роль: Ты — опытный спичрайтер Правительства Новосибирской области.

Контекст: 2 мая 2026, открытие технопарка «НСО Иннотех» — первый региональный центр поддержки технологических стартапов. Площадь: 3 200 м². 12 резидентов подписали соглашения. Якорный партнёр — Сбер. Аудитория: предприниматели, инвесторы, студенты НГУ и НГТУ, гости из Минэконома.

Задача: напиши речь губернатора на 7 минут.

Формат: ...

Ограничение: ...` },
    { label: 'Шаблон Задание Б (3 аудитории)', text: `Роль: ...

Контекст: В НСО с 1 июня 2026 года отменяется льготный проезд для пенсионеров на пригородных поездах. Вместо него — ежемесячная денежная компенсация 400 руб. через Госуслуги.

Задача: Объясни это решение трём аудиториям:
  ПЕНСИОНЕР: пожилая жительница Бердска, 72 года, телефон освоила недавно
  ПРЕДПРИНИМАТЕЛЬ: владелец малого бизнеса в Искитиме
  СТУДЕНТ: студент НГУ, 21 год

Формат: 3–4 предложения на каждую аудиторию, простым языком.

Ограничение: ...` },
    { label: 'Шаблон Задание В (ответ на обращение)', text: `Роль: Ты — специалист аппарата Правительства НСО по работе с обращениями граждан.

Контекст: 40 жителей микрорайона Родники подписали коллективное обращение — требуют ускорить ремонт детсада №317, закрытого 8 месяцев назад. Угрожают жалобой в прокуратуру.
Факты: реконструкция задержалась из-за банкротства подрядчика, новый выбран 3 недели назад, сдача — декабрь 2026.

Задача: подготовь официальный ответ.

Формат: признание проблемы → что произошло → что делается → конкретный срок → контакт для связи.

Ограничение: уважительный тон, конкретика, не отписка, до 250 слов.` }
  ],
  hasTask: true,
  artifacts: [],
  taskHtml: `
    <div class="task-panel-inner">
      <div class="task-header">⏱ ПРАКТИКА 1 · 15 минут</div>
      <p>Выберите одно задание и напишите промпт по формуле <strong>Роль → Контекст → Задача → Формат → Ограничение</strong></p>
      <div class="task-hint">Нажмите «Скопировать промпт» ниже — это <strong>пример для старта</strong>, адаптируйте под свою ситуацию</div>
    </div>`
},

// ─────────── БЛОК 4 ───────────
{
  id: 19, type: 'block-header', block: 4, blockName: 'Блок 4',
  html: `
    <div class="s-block-header">
      <div class="s-block-number">04</div>
      <h1 class="s-block-title">АНАЛИЗ ДОКУМЕНТОВ<br><span class="green-text">+ ПРАКТИКА 2</span></h1>
      <div class="s-block-time">25 минут</div>
    </div>`,
  speakerNotes: 'Переходим к документам. Используем Артефакт Б (постановление о субсидиях).',
  prompts: [], hasTask: false,
},

// ─────────── ДЕМО 2 ───────────
{
  id: 20, type: 'demo', block: 4, blockName: 'Блок 4',
  html: `
    <div class="s-content">
      <div class="demo-badge">ДЕМО 2 · Анализ документов · 3 итерации</div>
      <h2 class="s-heading">ОТ ХАОСА К ТАБЛИЦЕ ЗА 2 МИНУТЫ</h2>
      <div class="s-iterations">
        <div class="iteration bad-iteration">
          <div class="iter-num">1</div>
          <div class="iter-content">
            <code>Что изменилось в этом документе? [Текст]</code>
            <div class="iter-result">Результат: свободный текст, сложно читать ❌</div>
          </div>
        </div>
        <div class="iteration mid-iteration">
          <div class="iter-num">2</div>
          <div class="iter-content">
            <code>Роль: Ты — правовой аналитик. Задача: сравни две редакции, найди все изменения. [Текст]</code>
            <div class="iter-result">Лучше, но всё ещё без структуры ⚠️</div>
          </div>
        </div>
        <div class="iteration good-iteration">
          <div class="iter-num">3</div>
          <div class="iter-content">
            <code>Роль: Правовой аналитик Минэкономразвития НСО.
Задача: сравни две редакции постановления о субсидиях.
Формат — таблица:
| Статья | Старая | Новая | Характер изменения | Влияние на бизнес |
После таблицы: (1) что улучшилось, (2) что усложнило жизнь бизнесу.
Ограничение: только то, что есть в текстах. [СТАРАЯ РЕДАКЦИЯ] --- [НОВАЯ РЕДАКЦИЯ]</code>
            <div class="iter-result">Рабочий результат за 2 минуты ✅</div>
          </div>
        </div>
      </div>
      <div class="demo-tip">«Это занимает 2 минуты. Юрист делает то же самое за день.»</div>
    </div>`,
  speakerNotes: 'Использовать Артефакт Б. Показать все три итерации в реальном времени. Итерация 3 — финальный промпт.',
  prompts: [
    { label: 'Итерация 3 — анализ документа (рабочий)', text: `Роль: Ты — правовой аналитик Министерства экономического развития НСО.

Контекст: Два варианта постановления о субсидиях малому бизнесу НСО. Нужно понять, что изменилось, и оценить влияние на предпринимателей.

Задача: Сравни две редакции. Найди все значимые изменения.

Формат — таблица:
| Статья | Старая редакция | Новая редакция | Характер изменения | Влияние на бизнес |

Характер изменения: «расширение» / «сужение» / «новое требование» / «уточнение» / «исключение»

После таблицы: два вывода — (1) что улучшилось для предпринимателей, (2) какие новые требования усложнят жизнь.

Ограничение: только то, что есть в текстах. Не домысливать.

[СТАРАЯ РЕДАКЦИЯ]
---
[НОВАЯ РЕДАКЦИЯ]` }
  ],
  hasTask: false,
},

// ─────────── ПРАКТИКА 2 ───────────
{
  id: 21, type: 'practice', block: 4, blockName: 'Блок 4',
  html: `
    <div class="s-content">
      <div class="demo-badge">ПРАКТИКА 2 · 17 минут</div>
      <h2 class="s-heading">ВЫБЕРИТЕ ЗАДАНИЕ</h2>
      <div class="s-practice-cards s-practice-cards-4">
        <div class="practice-card"><div class="practice-letter">А</div><div class="practice-title">Саммари из трёх источников</div><div class="practice-desc">Пятница 17:45. Губернатор просит к понедельнику саммари по нацпроектам за квартал. Используйте Артефакт А.</div></div>
        <div class="practice-card"><div class="practice-letter">Б</div><div class="practice-title">Сравнение двух редакций</div><div class="practice-desc">Новая редакция постановления о субсидиях. Справка для вице-губернатора по экономике. Используйте Артефакт Б.</div></div>
        <div class="practice-card"><div class="practice-letter">В</div><div class="practice-title">Анализ на противоречия</div><div class="practice-desc">Законопроект Минобра о льготах педагогам сельских школ может конфликтовать с федеральным законом. Карта рисков.</div></div>
        <div class="practice-card"><div class="practice-letter">Г</div><div class="practice-title">Позиция на переговорах</div><div class="practice-desc">Совещание с Минфином РФ. НСО хочет +2 млрд руб. на дороги в Маслянинском и Сузунском районах. Минфин против.</div></div>
      </div>
    </div>`,
  speakerNotes: 'Напомнить про артефакты — они доступны на сайте по кнопке "Артефакты" внизу экрана.',
  prompts: [
    { label: 'Шаблон А — Саммари из источников', text: `Роль: Ты — аналитик в аппарате Правительства НСО.
Контекст: три документа — [перечислите].
Задача: сделай единое саммари для губернатора.
Формат:
  1. Ключевые решения (маркированный список)
  2. Что требует федеральный центр (срок, ответственные)
  3. Таблица: направление / факт / план / статус
  4. Топ-3 приоритета на ближайшую неделю
Ограничение: только факты из документов, одна страница.` },
    { label: 'Шаблон Б — Сравнение редакций постановления', text: `Роль: Ты — правовой аналитик Правительства НСО.

Контекст: нужно подготовить аналитическую справку для вице-губернатора по экономике — что изменилось в постановлении о субсидиях малому бизнесу (Артефакт Б).

Задача: сравни две редакции постановления. Найди все значимые изменения.

Формат — таблица:
| Статья | Старая редакция | Новая редакция | Характер изменения | Влияние на бизнес |

Характер изменения: «расширение / сужение / новое требование / уточнение / исключение»

После таблицы: вывод для вице-губернатора — 2–3 предложения.

Ограничение: только то, что есть в тексте, без домыслов.

[ВСТАВЬТЕ ТЕКСТ ИЗ АРТЕФАКТА Б]` },
    { label: 'Шаблон В — Анализ на правовые противоречия', text: `Роль: Ты — правовой аналитик.

Контекст: законопроект Министерства образования НСО о дополнительных льготах педагогам сельских школ. Нужно оценить риски несоответствия федеральному законодательству.

Задача: проанализируй законопроект. Найди возможные правовые риски и противоречия.

Формат:
1. Карта рисков — таблица:
   | Положение законопроекта | Возможное противоречие | Уровень риска (высокий / средний / низкий) |
2. Топ-3 критических замечания
3. Рекомендации по устранению каждого

Ограничение: выводы на основе логики и явных противоречий. Конкретные номера статей законов не придумывать.

[ВСТАВЬТЕ ТЕКСТ ЗАКОНОПРОЕКТА]` },
    { label: 'Шаблон Г — Позиция на переговорах', text: `Роль: Ты — опытный советник по стратегическим переговорам.
Контекст: НСО ведёт переговоры с Министерством финансов РФ о дополнительных инфраструктурных кредитах на дорожное строительство.
Задача: подготовь документ «Позиция на переговорах».
Формат:
  1. Наши интересы (что реально важно — не позиции)
  2. Интересы другой стороны (предположительно)
  3. Наши красные линии (на что не соглашаться)
  4. Зоны компромисса
  5. Сильные аргументы (3–5 с обоснованием)
  6. Контраргументы (что скажут они — и как отвечать)
Ограничение: читается за 5 минут до встречи.
Контекст ситуации: [добавьте свои детали]` }
  ],
  hasTask: true,
  artifacts: ['A', 'B', 'P2C', 'P2D'],
  taskHtml: `<div class="task-panel-inner"><div class="task-header">⏱ ПРАКТИКА 2 · 17 минут</div><p>Выберите задание А, Б, В или Г. Артефакты — кнопка внизу экрана.</p><div class="task-hint">Нажмите «Скопировать промпт» ниже — это <strong>пример для старта</strong>, адаптируйте под себя</div></div>`
},

// ─────────── ПЕРЕРЫВ ───────────
{
  id: 22, type: 'break', block: 0, blockName: 'Перерыв',
  html: `
    <div class="s-break">
      <div class="break-icon">☕</div>
      <h1 class="break-title">ПЕРЕРЫВ</h1>
      <div class="break-time">15 минут · возвращаемся в 11:50</div>
      <div class="break-hint">Попробуйте за перерыв задать ИИ любой рабочий вопрос, который давно откладывали</div>
      <div class="s-tools-quick">
        <a href="https://chat.qwen.ai" target="_blank" class="tool-quick-btn">Qwen</a>
        <a href="https://giga.chat" target="_blank" class="tool-quick-btn">GigaChat</a>
        <a href="https://chat.deepseek.com" target="_blank" class="tool-quick-btn">DeepSeek</a>
        <a href="https://perplexity.ai" target="_blank" class="tool-quick-btn">Perplexity</a>
      </div>
    </div>`,
  speakerNotes: 'Напомнить вернуться в 11:50. Объявить про QR-код на сайт с артефактами.',
  prompts: [], hasTask: false,
},

// ─────────── БЛОК 5 ───────────
{
  id: 23, type: 'block-header', block: 5, blockName: 'Блок 5',
  html: `
    <div class="s-block-header">
      <div class="s-block-number">05</div>
      <h1 class="s-block-title">ИССЛЕДОВАНИЯ<br><span class="green-text">+ GAMMA + ПРИЛОЖЕНИЕ</span></h1>
      <div class="s-block-time">30 минут</div>
    </div>`,
  speakerNotes: 'Три демо + практика. Perplexity → Gamma → Replit. Показать скорость.',
  prompts: [], hasTask: false,
},

// ─────────── ДЕМО 3А ───────────
{
  id: 24, type: 'demo', block: 5, blockName: 'Блок 5',
  html: `
    <div class="s-content">
      <div class="demo-badge">ДЕМО 3А · ИИ-поиск с источниками</div>
      <h2 class="s-heading">PERPLEXITY: ПОИСК ЗА 5 МИНУТ</h2>
      <div class="demo-tools-row">
        <a href="https://perplexity.ai" target="_blank" class="demo-tool-btn">Perplexity ↗</a>
        <a href="https://www.kimi.com" target="_blank" class="demo-tool-btn">Kimi ↗</a>
      </div>
      <div class="demo-context">Ситуация: нужно собрать данные по лучшим региональным практикам в сфере поддержки рождаемости — перед ответом в Минэк по Артефакту А.</div>
      <div class="s-prompt-block good-prompt">
        <div class="prompt-label">Промпт для Perplexity</div>
        <code>Какие регионы России показали лучшие результаты в повышении рождаемости в 2023–2025 годах? Конкретные примеры мер с измеримыми показателями. Приоритет: региональные инициативы (не федеральный маткапитал).</code>
      </div>
      <div class="demo-tip">«Perplexity даёт ответы со ссылками на источники. Это не поиск по сайтам — это готовый анализ.»</div>
    </div>`,
  speakerNotes: 'Открыть Perplexity. Скопировать промпт. Показать как AI ищет, цитирует источники. Это не Google.',
  prompts: [
    { label: 'Промпт для Perplexity — рождаемость', text: 'Какие регионы России показали лучшие результаты в повышении рождаемости в 2023–2025 годах? Конкретные примеры мер с измеримыми показателями. Приоритет: региональные инициативы (не федеральный маткапитал).' }
  ],
  hasTask: false,
},

// ─────────── ДЕМО 3Б ───────────
{
  id: 25, type: 'demo', block: 5, blockName: 'Блок 5',
  html: `
    <div class="s-content">
      <div class="demo-badge">ДЕМО 3Б · Презентация за 2 минуты</div>
      <h2 class="s-heading">GAMMA: ПРЕЗЕНТАЦИЯ БЕЗ ДИЗАЙНЕРА</h2>
      <a href="https://gamma.app" target="_blank" class="demo-tool-btn-large">Открыть gamma.app ↗</a>
      <div class="s-prompt-block good-prompt" style="margin-top:16px">
        <div class="prompt-label">Промпт для Gamma (вставить в "Создать из текста")</div>
        <code>Доклад: «Демографическая ситуация в НСО и меры поддержки рождаемости. I квартал 2026».
Аудитория: представители Министерства экономического развития РФ.
Цель: обосновать план мероприятий и запросить методическую поддержку.
Структура:
  Слайд 1: Текущая ситуация (факт 1,38 vs план 1,6, место в рейтинге)
  Слайд 2: Причины отставания
  Слайд 3: Действующие меры поддержки семей
  Слайд 4: Предлагаемые дополнительные меры
  Слайд 5: Запрос к Минэку
8 слайдов, деловой стиль, акцент на цифры и конкретику.</code>
      </div>
      <div class="demo-tip">«Вы меняете текст и данные — дизайн делает ИИ.»</div>
    </div>`,
  speakerNotes: 'Открыть Gamma. Создать → Из текста. Скопировать промпт. Подождать 30 секунд — показать готовую презентацию.',
  prompts: [
    { label: 'Промпт для Gamma — демография НСО', text: `Доклад: «Демографическая ситуация в НСО и меры поддержки рождаемости. I квартал 2026».
Аудитория: представители Министерства экономического развития РФ.
Цель: обосновать план мероприятий и запросить методическую поддержку.
Структура:
  Слайд 1: Текущая ситуация (факт 1,38 vs план 1,6, место в рейтинге)
  Слайд 2: Причины отставания
  Слайд 3: Действующие меры поддержки семей
  Слайд 4: Предлагаемые дополнительные меры
  Слайд 5: Запрос к Минэку
8 слайдов, деловой стиль, акцент на цифры и конкретику.` }
  ],
  hasTask: false,
},

// ─────────── ДЕМО 3В ───────────
{
  id: 26, type: 'demo', block: 5, blockName: 'Блок 5',
  html: `
    <div class="s-content">
      <div class="demo-badge">ДЕМО 3В · Страница без кода</div>
      <h2 class="s-heading">REPLIT: СТРАНИЦА ДЛЯ ГРАЖДАН ЗА 30 МИНУТ</h2>
      <a href="https://replit.com" target="_blank" class="demo-tool-btn-large">Открыть Replit ↗</a>
      <div class="s-prompt-block good-prompt" style="margin-top:16px">
        <div class="prompt-label">Промпт для Replit AI Chat</div>
        <code>Создай HTML-страницу на русском языке для предпринимателей НСО: «Как получить субсидию малому бизнесу: что изменилось с апреля 2026»

Разделы:
1. Что изменилось (таблица: было / стало, 5 ключевых пунктов)
2. Кто имеет право (условия получения)
3. Пошаговая инструкция (4 шага с иконками)
4. Список документов
5. Контакты: Министерство экономического развития НСО

Стиль: чистый, деловой, адаптивный. Цвета: синий и белый.</code>
      </div>
      <div class="demo-tip">«Это можно разместить на сайте правительства сегодня. Пять лет назад — работа веб-разработчика на три дня.»</div>
    </div>`,
  speakerNotes: 'Открыть Replit. Вставить промпт в AI Chat. Показать как генерируется HTML-страница. Можно запустить прямо в браузере.',
  prompts: [
    { label: 'Промпт для Replit — страница о субсидиях', text: `Создай HTML-страницу на русском языке для предпринимателей НСО: «Как получить субсидию малому бизнесу: что изменилось с апреля 2026»

Разделы:
1. Что изменилось (таблица: было / стало, 5 ключевых пунктов)
2. Кто имеет право (условия получения)
3. Пошаговая инструкция (4 шага с иконками)
4. Список документов
5. Контакты: Министерство экономического развития НСО, телефон, email

Стиль: чистый, деловой, адаптивный (мобильный и десктоп). Цвета: синий и белый. Без лишних элементов.` }
  ],
  hasTask: false,
},

// ─────────── ПРАКТИКА 3 ───────────
{
  id: 27, type: 'practice', block: 5, blockName: 'Блок 5',
  html: `
    <div class="s-content">
      <div class="demo-badge">ПРАКТИКА 3 · 17 минут</div>
      <h2 class="s-heading">ВЫБЕРИТЕ ЗАДАНИЕ</h2>
      <div class="s-practice-cards">
        <div class="practice-card"><div class="practice-letter">А</div><div class="practice-title">Сравнение региональных стратегий</div><div class="practice-desc">Перед стратегической сессией НСО. Сравнить Татарстан, Тюменскую и Нижегородскую области — как привлекают инвестиции. Использовать Perplexity.</div></div>
        <div class="practice-card"><div class="practice-letter">Б</div><div class="practice-title">Сценарное моделирование</div><div class="practice-desc">НСО рассматривает 6 млрд руб. гарантий для «Академгородок 2.0». Три сценария: оптимистичный, базовый, пессимистичный.</div></div>
        <div class="practice-card"><div class="practice-letter">В</div><div class="practice-title">Оценка технологических трендов</div><div class="practice-desc">Минцифры НСО готовит доклад «ИИ для регионального управления» для Комиссии при Президенте. Топ-5 технологий.</div></div>
      </div>
    </div>`,
  speakerNotes: 'Использовать Perplexity для сбора данных, потом Qwen для анализа.',
  prompts: [
    { label: 'Шаблон А — Сравнение регионов', text: `Роль: Ты — аналитик по стратегическому планированию регионов РФ.
Контекст: подготовка к стратегической сессии по развитию НСО.
Задача: сравни подходы трёх регионов к привлечению инвестиций.
Формат — таблица:
  | Параметр | Татарстан | Тюменская обл. | Нижегородская обл. | НСО |
  Параметры: стратегические приоритеты / инструменты привлечения / ключевые результаты / что отличает от других
После: топ-3 практики, применимые в НСО — с кратким обоснованием.
Ограничение: конкретные факты, не общие слова.` },
    { label: 'Шаблон Б — Сценарное моделирование', text: `Роль: Ты — финансовый аналитик по государственным инвестициям.

Контекст: НСО рассматривает предоставление государственных гарантий на 6 млрд руб. для реализации проекта «Академгородок 2.0». Нужно оценить риски и возможности.

Задача: разработай три финансовых сценария.

Формат — три блока:
ОПТИМИСТИЧНЫЙ: условия → ключевые показатели → выгоды для НСО → остаточные риски
БАЗОВЫЙ: условия → ключевые показатели → выгоды → риски
ПЕССИМИСТИЧНЫЙ: условия → ключевые показатели → потери бюджета → меры защиты

Вывод: какой сценарий наиболее вероятен и почему — 2–3 предложения.

Ограничение: без точных финансовых расчётов, только логический анализ и оценки.` },
    { label: 'Шаблон В — Оценка технологических трендов', text: `Роль: Ты — эксперт по цифровым технологиям в государственном управлении.

Контекст: Минцифры НСО готовит доклад «ИИ для регионального управления» для Комиссии при Президенте РФ по развитию ИИ.

Задача: определи топ-5 технологий ИИ, наиболее перспективных для внедрения в региональном управлении в ближайшие 2 года.

Формат — таблица:
| Технология | Что это | Применение в регионе | Готовность к внедрению (1–5) | Первый шаг |

После таблицы: рекомендация — с какой технологии начать НСО и почему (1 абзац).

Ограничение: только реально работающие решения, не концепты. С примерами из других регионов.` }
  ],
  hasTask: true,
  artifacts: ['P3A', 'P3B'],
  taskHtml: `<div class="task-panel-inner"><div class="task-header">⏱ ПРАКТИКА 3 · 17 минут</div><p>Выберите задание. Для сбора данных — Perplexity. Для анализа — Qwen.</p><div class="task-hint">Нажмите «Скопировать промпт» ниже — это <strong>пример для старта</strong>, адаптируйте под себя</div></div>`
},

// ─────────── БЛОК 6 ───────────
{
  id: 28, type: 'block-header', block: 6, blockName: 'Блок 6',
  html: `
    <div class="s-block-header">
      <div class="s-block-number">06</div>
      <h1 class="s-block-title">СИСТЕМНЫЕ ПРОМПТЫ<br><span class="green-text">ОДНА ЗАДАЧА — ОДИН ШАБЛОН</span></h1>
      <div class="s-block-time">15 минут</div>
    </div>`,
  speakerNotes: 'Объяснить идею: не настраиваем ИИ-помощника навсегда. Отточенный шаблон для одной повторяющейся задачи.',
  prompts: [], hasTask: false,
},

// ─────────── СИСТЕМНЫЕ ПРОМПТЫ ───────────
{
  id: 29, type: 'content', block: 6, blockName: 'Блок 6',
  html: `
    <div class="s-content">
      <h2 class="s-heading">ЗАЧЕМ СИСТЕМНЫЕ ПРОМПТЫ</h2>
      <div class="s-principle-box">
        <div class="principle-text">Один повторяющийся сценарий → один отточенный промпт → сохранить в заметках → вставлять каждый раз</div>
      </div>
      <div class="s-two-col" style="margin-top:20px">
        <div>
          <div class="col-title green-text">Где хранить</div>
          <ul class="s-list">
            <li><strong>Qwen</strong> → Настройки → Системные инструкции</li>
            <li><strong>GigaChat</strong> → «Создать ассистента»</li>
            <li><strong>Универсально:</strong> Telegram → Избранное</li>
          </ul>
        </div>
        <div>
          <div class="col-title purple-text">Примеры задач для шаблона</div>
          <ul class="s-list">
            <li>Еженедельный протокол совещания</li>
            <li>Ответ на обращение граждан по категории</li>
            <li>Справка по запросу руководства</li>
            <li>Список замечаний при согласовании документа</li>
          </ul>
        </div>
      </div>
    </div>`,
  speakerNotes: '"Настроили один раз — вставляете данные каждую неделю и всегда получаете один и тот же формат."',
  prompts: [], hasTask: false,
},

// ─────────── ДЕМО ШАБЛОН ПРОТОКОЛА ───────────
{
  id: 30, type: 'demo', block: 6, blockName: 'Блок 6',
  html: `
    <div class="s-content">
      <div class="demo-badge">ДЕМО 6 · Шаблон еженедельного протокола</div>
      <h2 class="s-heading">ОДИН ШАБЛОН — КАЖДУЮ НЕДЕЛЮ</h2>
      <div class="s-prompt-block good-prompt">
        <div class="prompt-label">Системный промпт — Протокол совещания</div>
        <code>Роль: Ты — помощник по протоколированию совещаний.
Контекст: ты работаешь в аппарате Правительства НСО. Все совещания оформляются в едином формате.
Задача: превращай расшифровки совещаний в структурированный протокол.
Формат — всегда одинаковый:

ПРОТОКОЛ СОВЕЩАНИЯ
Дата: [из текста]
Председатель: [из текста]
Присутствовали: [список]

СЛУШАЛИ: [темы повестки]
ОБСУДИЛИ: [ключевые точки, кратко]
РЕШИЛИ:
| № | Решение | Ответственный | Срок |

СЛЕДУЮЩЕЕ СОВЕЩАНИЕ: [если упоминается]

Ограничение: только то, что есть в расшифровке. Если данных нет — поле пустым, не домысливать.</code>
      </div>
    </div>`,
  speakerNotes: 'Показать как сохранить в Qwen → Системные инструкции. Потом вставить расшифровку и получить протокол.',
  prompts: [
    { label: 'Системный промпт — Протокол совещания', text: `Роль: Ты — помощник по протоколированию совещаний.
Контекст: ты работаешь в аппарате Правительства НСО. Все совещания оформляются в едином формате.
Задача: превращай расшифровки совещаний в структурированный протокол.
Формат — всегда одинаковый:

ПРОТОКОЛ СОВЕЩАНИЯ
Дата: [из текста]
Председатель: [из текста]
Присутствовали: [список]

СЛУШАЛИ: [темы повестки]
ОБСУДИЛИ: [ключевые точки, кратко]
РЕШИЛИ:
| № | Решение | Ответственный | Срок |

СЛЕДУЮЩЕЕ СОВЕЩАНИЕ: [если упоминается]

Ограничение: только то, что есть в расшифровке. Если данных нет — оставить поле пустым, не домысливать.` }
  ],
  hasTask: false,
},

// ─────────── ПРАКТИКА 6 ───────────
{
  id: 31, type: 'practice', block: 6, blockName: 'Блок 6',
  html: `
    <div class="s-content">
      <div class="demo-badge">ПРАКТИКА 6 · 7 минут</div>
      <h2 class="s-heading">ВАШИ РАБОЧИЕ СЦЕНАРИИ</h2>
      <div class="s-practice-cards">
        <div class="practice-card">
          <div class="practice-letter">А</div>
          <div class="practice-title">Еженедельный отчёт</div>
          <div class="practice-desc">Создайте шаблон-промпт для еженедельного отчёта своего подразделения. Настроили один раз — вставляете данные каждую пятницу.</div>
        </div>
        <div class="practice-card">
          <div class="practice-letter">Б</div>
          <div class="practice-title">Ответ на обращение граждан</div>
          <div class="practice-desc">Шаблон для типового ответа по часто встречающимся категориям обращений в вашем ведомстве.</div>
        </div>
        <div class="practice-card">
          <div class="practice-letter">В</div>
          <div class="practice-title">Замечания при согласовании</div>
          <div class="practice-desc">Шаблон для подготовки замечаний при согласовании нормативного документа или проекта приказа.</div>
        </div>
      </div>
      <div class="practice-instruction">Сохраните промпт в <strong>Telegram → Избранное</strong> или <strong>Qwen → Системные инструкции</strong></div>
    </div>`,
  speakerNotes: '7 минут. Каждый пишет шаблон под свою реальную задачу. Ходить по залу, помогать. Потом 2–3 человека показывают что получилось.',
  prompts: [
    { label: 'Шаблон А — Еженедельный отчёт подразделения', text: `Роль: Ты — помощник руководителя подразделения.
Контекст: ты работаешь в [название подразделения, ведомство].
Задача: каждую пятницу я даю тебе сырые данные за неделю — преобразуй их в структурированный отчёт.
Формат — всегда одинаковый:
  1. Ключевые результаты недели (3–5 пунктов)
  2. Выполнено / не выполнено по плану: таблица | задача | статус | причина задержки |
  3. Проблемы и риски (если есть)
  4. Приоритеты на следующую неделю (3–5 пунктов)
Ограничение: только факты из моих данных, без дополнений. Деловой стиль, без воды.` },
    { label: 'Шаблон Б — Ответ на обращение граждан', text: `Роль: Ты — специалист по работе с обращениями граждан в [ведомство].
Контекст: я буду давать тебе суть обращения и имеющиеся факты.
Задача: каждый раз составляй официальный ответ на обращение гражданина.
Формат — всегда одинаковый:
  1. Признание обращения (без канцелярского «уважаемый», личное обращение)
  2. Суть ситуации — что происходит и почему
  3. Что делается прямо сейчас
  4. Конкретный срок решения
  5. Контакт для обратной связи
Ограничение: уважительный тон, конкретика, до 200 слов, без отписок.` },
    { label: 'Шаблон В — Замечания при согласовании документа', text: `Роль: Ты — правовой эксперт по нормативным документам государственного управления.
Контекст: я буду давать тебе текст документа на согласование.
Задача: анализируй каждый документ и готовь перечень замечаний.
Формат — всегда одинаковый:
  1. Критические замечания: таблица | № | Пункт | Замечание | Предлагаемая редакция |
  2. Существенные замечания (желательно изменить)
  3. Редакционные замечания (стиль, формулировки)
  4. Вывод: рекомендация — принять / принять с изменениями / отклонить
Ограничение: только по тексту документа, конкретные предложения по улучшению.` },
  ],
  hasTask: true,
  artifacts: [],
  taskHtml: `<div class="task-panel-inner"><div class="task-header">⏱ ПРАКТИКА 6 · 7 минут</div><p>Выберите одну повторяющуюся задачу и напишите шаблон-промпт.</p><div class="task-hint">Нажмите «Скопировать промпт» ниже — это <strong>пример для старта</strong>, замените на свою задачу</div></div>`
},

// ─────────── БЛОК 7 ───────────
{
  id: 32, type: 'block-header', block: 7, blockName: 'Блок 7',
  html: `
    <div class="s-block-header">
      <div class="s-block-number">07</div>
      <h1 class="s-block-title">ШПАРГАЛКА<br><span class="green-text">+ ОБУЧЕНИЕ + РЕТРОСПЕКТИВА</span></h1>
      <div class="s-block-time">25 минут</div>
    </div>`,
  speakerNotes: 'Финальный блок. Шпаргалка → программы обучения → ретроспектива → финальное слово.',
  prompts: [], hasTask: false,
},

// ─────────── ШПАРГАЛКА ───────────
{
  id: 33, type: 'content', block: 7, blockName: 'Блок 7',
  html: `
    <div class="s-content">
      <h2 class="s-heading">5 ПРОМПТОВ НА КАЖДЫЙ ДЕНЬ</h2>
      <div class="s-cheatsheet">
        <div class="cheat-card"><div class="cheat-num">1</div><div class="cheat-title">Быстрая аналитическая справка</div><div class="cheat-text">Роль: аналитик. Контекст: [тема]. Задача: суть / ключевые факты / что важно для решения. Формат: не более половины страницы.</div></div>
        <div class="cheat-card"><div class="cheat-num">2</div><div class="cheat-title">Черновик поручения (SMART)</div><div class="cheat-text">Роль: опытный управленец. Задача: [описание], исполнитель: [роль]. Составь поручение по SMART. Срок: [дата].</div></div>
        <div class="cheat-card"><div class="cheat-num">3</div><div class="cheat-title">Ответ на обращение граждан</div><div class="cheat-text">Роль: специалист по обращениям. Обращение: [суть]. Формат: признание → что делается → что будет → срок → контакт. До 200 слов.</div></div>
        <div class="cheat-card"><div class="cheat-num">4</div><div class="cheat-title">Подготовка к совещанию</div><div class="cheat-text">Совещание по [теме]. Дай: что важно знать / вопросы задать / риски / что может пойти не так. За 3 минуты чтения.</div></div>
        <div class="cheat-card cheat-meta"><div class="cheat-num">⚡</div><div class="cheat-title">Метапромпт (универсальный)</div><div class="cheat-text">«Составь для меня идеальный промпт под задачу: [описание задачи]»</div></div>
      </div>
    </div>`,
  speakerNotes: 'Участники фотографируют слайд. Пауза. Дать 20 секунд на фото. Сказать что всё это также на сайте — доступно потом.',
  prompts: [
    { label: '1. Быстрая аналитическая справка', text: `Роль: Ты — аналитик.
Контекст: [тема / сфера].
Задача: дай краткую справку: суть / ключевые факты / что важно знать для принятия решения.
Формат: структурированный текст, не более половины страницы.
Ограничение: только факты, не домысли.` },
    { label: '2. Черновик поручения (SMART)', text: `Роль: Ты — опытный управленец.
Контекст: задача — [описание], исполнитель — [роль/ФИО].
Задача: составь поручение по SMART.
Формат: S (что конкретно) / M (как измерить) / A (реалистично ли) / R (зачем нужно) / T (срок — [дата]).
Ограничение: без воды, только суть.` },
    { label: '3. Ответ на обращение граждан', text: `Роль: Ты — специалист по работе с обращениями граждан.
Контекст: обращение — [суть], факты ситуации — [детали].
Задача: подготовь официальный ответ.
Формат: признание проблемы → что делается → что будет сделано → срок → контакт.
Ограничение: уважительный тон, конкретика, не отписка, до 200 слов.` },
    { label: '4. Подготовка к совещанию', text: `Роль: Ты — опытный советник.
Контекст: совещание по [теме], моя позиция — [описание].
Задача: дай краткую подготовку за 3 минуты.
Формат: что важно знать / какие вопросы задать / какие риски обсуждения / что может пойти не так.
Ограничение: конкретно, без общих слов.` },
    { label: '⚡ Метапромпт (универсальный)', text: `Составь для меня идеальный промпт под задачу: [описание вашей задачи]` }
  ],
  hasTask: false,
},

// ─────────── ПРОГРАММЫ ШКОЛЫ 21 ───────────
{
  id: 34, type: 'table', block: 7, blockName: 'Блок 7',
  html: `
    <div class="s-content">
      <h2 class="s-heading">ПРОГРАММЫ ОБУЧЕНИЯ — ШКОЛА 21</h2>
      <table class="s-table s-table-programs">
        <thead><tr><th></th><th class="prog-level">НАЧАЛЬНЫЙ</th><th class="prog-level">СРЕДНИЙ</th><th class="prog-level prog-advanced">ПРОДВИНУТЫЙ</th></tr></thead>
        <tbody>
          <tr><td class="row-label">Название</td><td>ИИ-трансформация профессии</td><td>Основы ИИ: модели и агенты</td><td class="prog-highlight">GenAI: к написанию агентов</td></tr>
          <tr><td class="row-label">Аудитория</td><td>Менеджмент и линейные сотрудники</td><td>Менеджмент с базовым ИИ</td><td class="prog-highlight">Сотрудники с опытом ИИ</td></tr>
          <tr><td class="row-label">Программа</td><td>Знакомство с ИИ, промптинг, ежедневная работа</td><td>Эффективные промпты, комбинирование нейросетей, агенты без кода</td><td class="prog-highlight">API, мультиагентные системы, собственные решения</td></tr>
          <tr><td class="row-label">Длительность</td><td>3 дня</td><td>3 дня</td><td class="prog-highlight">5 дней</td></tr>
          <tr><td class="row-label">Цена / чел.</td><td><span class="price-tag">70 000 ₽</span></td><td><span class="price-tag">100 000 ₽</span></td><td class="prog-highlight"><span class="price-tag green-price">100 000 ₽</span></td></tr>
          <tr><td class="row-label">Группа</td><td>от 30 человек</td><td>от 30 человек</td><td class="prog-highlight">от 30 человек</td></tr>
        </tbody>
      </table>
      <div class="s-note">Цена корректируется в зависимости от размера группы, региона и кастомизации</div>
    </div>`,
  speakerNotes: 'Показать три уровня. Подчеркнуть: для аудитории сегодня — начальный уровень. Следующий шаг — средний.',
  prompts: [], hasTask: false,
},

// ─────────── РЕТРОСПЕКТИВА ───────────
{
  id: 35, type: 'content', block: 7, blockName: 'Блок 7',
  html: `
    <div class="s-content">
      <h2 class="s-heading">РЕТРОСПЕКТИВА</h2>
      <div class="s-retro">
        <div class="retro-item">
          <div class="retro-num">01</div>
          <div class="retro-q">Какое самое важное открытие по ИИ вы сделали за сегодня?</div>
        </div>
        <div class="retro-item">
          <div class="retro-num">02</div>
          <div class="retro-q">Что было самым ценным на воркшопе?</div>
        </div>
        <div class="retro-item highlight-retro">
          <div class="retro-num green-num">03</div>
          <div class="retro-q">Какую <strong>одну конкретную задачу</strong> попробуете решить с ИИ уже на этой неделе?</div>
        </div>
      </div>
    </div>`,
  speakerNotes: '5 минут. Попросить 3-4 человека ответить вслух на вопрос №3. Записать конкретные задачи на доске.',
  prompts: [], hasTask: false,
},

// ─────────── ФИНАЛ ───────────
{
  id: 36, type: 'final', block: 7, blockName: 'Финал',
  html: `
    <div class="s-final">
      <div class="final-quote">«Вы сегодня сделали кое-что важное — не просмотрели презентацию, а сделали реальную работу с ИИ. Промпты у вас есть. Используйте их.»</div>
      <div class="final-resources">
        <div class="final-resource">
          <div class="resource-title">📱 Материалы воркшопа</div>
          <div class="resource-desc">Все промпты, артефакты и шпаргалка — на этом сайте</div>
        </div>
        <div class="final-resource">
          <div class="resource-title">💬 Поддержка</div>
          <div class="resource-desc">Телеграм-чат для вопросов после воркшопа</div>
        </div>
      </div>
      <div class="final-logo">
        <div class="school21-logo-large">
          <div class="logo21-mark">21</div>
          <div class="logo21-text">ШКОЛА<br><small>SBER</small></div>
        </div>
      </div>
    </div>`,
  speakerNotes: 'Пауза. Поблагодарить. Остаться на вопросы.',
  prompts: [], hasTask: false,
},

]; // end SLIDES

// ─────────── АРТЕФАКТЫ (документы для практики) ───────────
window.ARTIFACTS = {
  A: {
    tabLabel: 'А — Три документа',
    title: 'Артефакт А — Три документа (для Практики 2А)',
    sections: [
      {
        title: 'ПРОТОКОЛ ОПЕРАТИВНОГО СОВЕЩАНИЯ',
        subtitle: 'Правительство Новосибирской области, 15 апреля 2026',
        content: `<p><strong>Присутствуют:</strong> губернатор, вице-губернаторы, министры здравоохранения, транспорта, образования, цифрового развития.</p>
<p><strong>СЛУШАЛИ:</strong></p>
<ol>
<li>Минздрав — оснащение ЦРБ медоборудованием: из 18 ЦРБ оснащены 11. Задержка по 7 объектам из-за проблем с поставкой.</li>
<li>Минтранс — контракты на ремонт дорог: 3 контракта не заключены, сметная документация не готова.</li>
<li>Минобр — интернет в школах: из 847 школ НСО широкополосный интернет проведён в 712 (84%).</li>
</ol>
<p><strong>РЕШИЛИ:</strong></p>
<ul>
<li>Минздраву — план-график оснащения оставшихся 7 ЦРБ до 20.04.2026</li>
<li>Минтрансу — закрыть все 3 контракта до 25.04.2026, доложить</li>
<li>Минобру — план по 135 отстающим школам (приоритет: отдалённые районы) до 30.04.2026</li>
</ul>`
      },
      {
        title: 'ПИСЬМО МИНЭКОНОМРАЗВИТИЯ РФ',
        subtitle: 'Исх. № 3412/МЭ от 10 апреля 2026. Губернатору НСО',
        content: `<p>О предоставлении отчётности по нацпроекту «Демография», показатель «Рождаемость».</p>
<p>По данным Росстата за I квартал 2026 г. НСО занимает <strong>47 место</strong> среди субъектов РФ по суммарному коэффициенту рождаемости (1,38 при целевом — 1,6). Отставание от плана: <strong>13,8%</strong>.</p>
<p>Просим до 20 апреля 2026 представить:</p>
<ol>
<li>Анализ причин отклонения от целевого показателя</li>
<li>Перечень реализуемых мер поддержки семей с детьми</li>
<li>Предложения по дополнительным мероприятиям с оценкой бюджетной потребности</li>
</ol>`
      },
      {
        title: 'КЛЮЧЕВЫЕ ПОКАЗАТЕЛИ НСО — I квартал 2026',
        subtitle: 'Тезисы',
        content: `<ul>
<li>Нацпроект «Здравоохранение»: исполнение <strong>78%</strong> (план 90%) — <span style="color:#ff6b6b">отставание</span></li>
<li>Нацпроект «Демография»: исполнение <strong>82%</strong></li>
<li>Нацпроект «Образование»: исполнение <strong>91%</strong> — <span style="color:#44EB99">лидер</span></li>
<li>Нераспределённый резерв: <strong>340 млн руб.</strong> (поступил из федерального резерва)</li>
<li>Приоритетные статьи к распределению: ЦРБ (120 млн), дороги (85 млн), школы (135 млн)</li>
</ul>`
      }
    ]
  },
  B: {
    tabLabel: 'Б — Постановление',
    title: 'Артефакт Б — Постановление о субсидиях (два варианта)',
    sections: [
      {
        title: 'СТАРАЯ РЕДАКЦИЯ (декабрь 2025)',
        subtitle: 'Постановление Правительства НСО «О субсидиях субъектам малого предпринимательства»',
        content: `<ul>
<li>Ст. 3: Субсидия — до <strong>500 тыс. руб.</strong></li>
<li>Ст. 5: Срок рассмотрения заявки — <strong>30 рабочих дней</strong></li>
<li>Ст. 7: Документы подаются <strong>лично в МФЦ</strong></li>
<li>Ст. 10: Получатель обязан сохранить рабочие места на <strong>1 год</strong></li>
<li>Ст. 12: Возврат субсидии при нарушении — в течение <strong>60 дней</strong></li>
</ul>`
      },
      {
        title: 'НОВАЯ РЕДАКЦИЯ (апрель 2026)',
        subtitle: 'Постановление Правительства НСО «О субсидиях субъектам малого предпринимательства»',
        content: `<ul>
<li>Ст. 3: Субсидия — до <strong>1 млн руб.</strong> <span style="color:#44EB99">(+100%)</span></li>
<li>Ст. 5: Срок рассмотрения — <strong>15 рабочих дней</strong> <span style="color:#44EB99">(−50%)</span></li>
<li>Ст. 7: Документы — через <strong>Госуслуги или лично в МФЦ</strong></li>
<li>Ст. 8 <span style="color:#44EB99">(новая)</span>: Приоритет — производственные предприятия и IT-компании</li>
<li>Ст. 10: Сохранить рабочие места — <strong>2 года</strong> <span style="color:#ff6b6b">(было 1 год)</span></li>
<li>Ст. 12: Возврат при нарушении — <strong>30 дней</strong> <span style="color:#ff6b6b">(было 60)</span></li>
<li>Ст. 15 <span style="color:#44EB99">(новая)</span>: Доля расходов на маркетинг — не более 20% от субсидии</li>
</ul>`
      }
    ]
  },

  P2C: {
    tabLabel: 'В — Законопроект',
    title: 'Артефакт В — Законопроект о льготах педагогам сельских школ',
    sections: [
      {
        title: 'ЗАКОНОПРОЕКТ НСО (проект)',
        subtitle: 'О внесении изменений в Закон НСО № 258-ОЗ «О мерах социальной поддержки педагогических работников»',
        content: `<p><strong>Статья 1.</strong> Внести в Закон НСО № 258-ОЗ следующие изменения:</p>
<p><strong>1.1</strong> Дополнить статью 2 пунктом 2.1:<br>
Педагогические работники <em>сельских общеобразовательных организаций</em> имеют право на ежемесячную надбавку к должностному окладу в размере <strong>15%</strong>, финансируемую из областного бюджета.</p>
<p><strong>1.2</strong> Дополнить статью 2 пунктом 2.2:<br>
Педагогические работники сельских школ со стажем не менее <strong>3 лет</strong> имеют право на единовременную выплату при улучшении жилищных условий — <strong>500 000 рублей</strong> из областного бюджета.</p>
<p><strong>1.3</strong> Действие Закона распространяется на педагогических работников <em>всех</em> общеобразовательных организаций, получивших государственную аккредитацию, включая <strong>частные</strong>.</p>
<p><strong>1.4</strong> Контроль возложить на Министерство образования НСО.</p>`
      },
      {
        title: 'СПРАВОЧНО: Действующее федеральное регулирование',
        subtitle: 'Нормы, которые могут конфликтовать с законопроектом',
        content: `<ul>
<li><strong>Ст. 47 Федерального закона № 273-ФЗ «Об образовании в РФ»</strong>: педагогам сельских школ гарантируются надбавки <em>не ниже</em> федерального минимума — Постановление Правительства РФ № 963 устанавливает надбавку <strong>не менее 25%</strong> оклада.</li>
<li><strong>Программа «Земский учитель»</strong> (Постановление № 1117): единовременная выплата — <strong>1 000 000 руб.</strong> Условие участия: получатель <em>не должен</em> получать аналогичных региональных выплат при переезде.</li>
<li><strong>Ст. 78.1 Бюджетного кодекса РФ</strong>: субсидии из регионального бюджета предоставляются некоммерческим организациям; частные школы могут быть коммерческими — вопрос правомерности субсидирования.</li>
<li><strong>Приказ Минпросвещения РФ № 196</strong>: номенклатура должностей педагогических работников — перечень закрытый. Расширительное толкование без изменения федерального акта неправомерно.</li>
</ul>`
      }
    ]
  },

  P2D: {
    tabLabel: 'Г — Переговоры с Минфином',
    title: 'Артефакт Г — Справочные материалы к переговорам с Минфином РФ',
    sections: [
      {
        title: 'ЗАПРОС НСО',
        subtitle: 'Дополнительное финансирование дорог — Маслянинский и Сузунский районы',
        content: `<p><strong>Суть запроса:</strong> инфраструктурный бюджетный кредит <strong>2 млрд рублей</strong> на ремонт и строительство дорог.</p>
<ul>
<li><strong>Маслянинский район:</strong> трасса Маслянино — Бердск (48 км) — износ 74%, ограничение осевой нагрузки с 2024 г. Отрезает 3 500 жителей зимой. Смета: <strong>1,2 млрд руб.</strong></li>
<li><strong>Сузунский район:</strong> подъезд к промзоне «Сузун-Агро» (22 км) — 1 800 рабочих мест, крупнейший агрокластер НСО. Смета: <strong>0,8 млрд руб.</strong></li>
<li><strong>Экономический эффект:</strong> снижение логистических издержек −18%, рост налоговых поступлений +340 млн руб./год (оценка МЭР НСО).</li>
</ul>`
      },
      {
        title: 'ПОЗИЦИЯ МИНФИНА РФ (предварительная)',
        subtitle: 'Аргументы, озвученные на предварительных консультациях',
        content: `<ul>
<li>НСО получила инфраструктурный кредит в 2023 году (1,5 млрд руб.) — плановый лимит на 2026 г. исчерпан.</li>
<li>Долговая нагрузка НСО — <strong>48%</strong> собственных доходов; Минфин РФ применяет порог 50% для новых кредитов.</li>
<li>Объекты не включены в федеральную схему опорных дорог (нет статуса федерального значения).</li>
<li>Альтернатива Минфина: нацпроект «Безопасные качественные дороги» — срок подачи заявок истёк в феврале 2026.</li>
</ul>`
      },
      {
        title: 'ДОПОЛНИТЕЛЬНЫЙ КОНТЕКСТ',
        subtitle: 'Факты для усиления позиции НСО',
        content: `<ul>
<li><strong>Прецедент:</strong> Тюменская область в 2025 г. получила кредит 3,2 млрд руб. при долговой нагрузке <strong>53%</strong>.</li>
<li><strong>Правовой аргумент:</strong> «Сузун-Агро» — резидент ОЭЗ «Новосибирск»; дорожная блокировка нарушает соглашение с Минэкономразвития РФ (ответственность федерального центра).</li>
<li><strong>Политический фактор:</strong> депутат ГД от НСО направил запрос в Правительство РФ.</li>
<li><strong>Резерв фонда:</strong> по открытой отчётности, незадействованные средства федерального дорожного фонда на 01.04.2026 — <strong>14,7 млрд руб.</strong></li>
</ul>`
      }
    ]
  },

  P3A: {
    tabLabel: 'А — Стратегии регионов',
    title: 'Артефакт А — Инвестиционные стратегии регионов-лидеров',
    sections: [
      {
        title: 'ТАТАРСТАН',
        subtitle: 'Данные для сравнения',
        content: `<ul>
<li><strong>Стратегический приоритет:</strong> «Татарстан — технологический хаб Поволжья». ОЭЗ «Иннополис» — 350+ резидентов, 11 тыс. рабочих мест в IT.</li>
<li><strong>Инструменты:</strong> инвестстандарт АСИ (топ-5 РФ), региональный инвестфонд — 8 млрд руб., «одно окно» через Агентство инвестиционного развития.</li>
<li><strong>Результат 2023–2025:</strong> прямые инвестиции — 987 млрд руб. (3-е место РФ), рост +12%/год.</li>
<li><strong>Отличие:</strong> ГЧП — Татарстан входит в капитал крупных проектов от 5%, обеспечивая доверие инвесторов.</li>
</ul>`
      },
      {
        title: 'ТЮМЕНСКАЯ ОБЛАСТЬ',
        subtitle: 'Данные для сравнения',
        content: `<ul>
<li><strong>Стратегия:</strong> диверсификация от нефтегаза — агро, нефтехимия, IT.</li>
<li><strong>Инструменты:</strong> нулевая ставка налога на прибыль на 5 лет, 4 промпарка с готовой инфраструктурой.</li>
<li><strong>Результат:</strong> 42 новых предприятия в несырьевых секторах, 9 700 рабочих мест (2023–2025).</li>
<li><strong>Отличие:</strong> «Тюменский стандарт» — гарантия неизменности условий на 10 лет.</li>
</ul>`
      },
      {
        title: 'НИЖЕГОРОДСКАЯ ОБЛАСТЬ',
        subtitle: 'Данные для сравнения',
        content: `<ul>
<li><strong>Стратегия:</strong> ОПК-кластер + IT + туризм. Статус «столицы НТИ».</li>
<li><strong>Инструменты:</strong> ИНТЦ «Квантовая долина», субсидирование % по кредитам до 8% годовых.</li>
<li><strong>Результат:</strong> ВРП +14,2% за 2 года, рейтинг АСИ — 2-е место (2024).</li>
<li><strong>Отличие:</strong> соглашения с Ростех, Росатом как якорные инвесторы — частный бизнес идёт следом.</li>
</ul>`
      },
      {
        title: 'НСО — ТЕКУЩАЯ СИТУАЦИЯ',
        subtitle: 'Исходные данные для анализа',
        content: `<ul>
<li>Рейтинг АСИ: <strong>28-е место</strong> (2024), снижение с 21-го (2022)</li>
<li>Инвестиции в ОФ: <strong>312 млрд руб.</strong> (2025), рост +4,1% (ниже инфляции)</li>
<li><strong>Сильные стороны:</strong> НГУ, НГТУ, Академгородок, авиационный кластер, агропром</li>
<li><strong>Слабые стороны:</strong> нет региональной ОЭЗ, дефицит подготовленных промплощадок</li>
<li><strong>Возможность 2026:</strong> статус «НТИ-регион» по квантовым технологиям — решение в этом году</li>
</ul>`
      }
    ]
  },

  P3B: {
    tabLabel: 'Б — Академгородок 2.0',
    title: 'Артефакт Б — Проект Академгородок 2.0: данные для сценарного анализа',
    sections: [
      {
        title: 'ОПИСАНИЕ ПРОЕКТА',
        subtitle: 'Ключевые параметры',
        content: `<p><strong>Академгородок 2.0</strong> — создание инновационного технополиса рядом с существующим Академгородком. 9 мегапроектов.</p>
<ul>
<li><strong>Площадь:</strong> ~2 600 га</li>
<li><strong>Общий объём инвестиций:</strong> 500+ млрд руб. до 2035 г.</li>
<li><strong>Ключевые объекты:</strong> СКИФ (синхротрон, запуск 2026 г.), Медбиотехкластер, IT-парк, жилой район 50 000 чел.</li>
<li><strong>Федеральное участие:</strong> ~320 млрд руб. (гарантировано до 2030 г.)</li>
<li><strong>Региональный вклад НСО:</strong> ~80 млрд руб. прямых инвестиций</li>
</ul>`
      },
      {
        title: 'ПАРАМЕТРЫ ЗАПРОСА ГОСГАРАНТИИ',
        subtitle: 'Конкретная сделка',
        content: `<ul>
<li><strong>Инициатор:</strong> ООО «Академпарк-Девелопмент» (дочернее предприятие Технопарка Академгородок)</li>
<li><strong>Цель кредита:</strong> строительство инфраструктуры южного кластера (дороги, сети, коммерческие площади)</li>
<li><strong>Объём кредита:</strong> 6 000 млн руб. (Газпромбанк, ставка КС+2%, срок 7 лет)</li>
<li><strong>Запрашиваемая госгарантия НСО:</strong> 100% = <strong>6 млрд руб.</strong></li>
<li><strong>Обеспечение от компании:</strong> право аренды земли (кад. стоимость 1,8 млрд руб.)</li>
</ul>`
      },
      {
        title: 'ФИНАНСОВЫЕ ДАННЫЕ ИНИЦИАТОРА',
        subtitle: 'По данным СПАРК и отчётности за 2025 г.',
        content: `<ul>
<li>Выручка 2025: <strong>2,1 млрд руб.</strong> (+34% г/г)</li>
<li>EBITDA margin: <strong>18%</strong></li>
<li>Долговая нагрузка (Debt/EBITDA): <strong>3,2x</strong> — умеренно высокая</li>
<li>67% выручки — от государственных арендаторов (СО РАН, НГУ): <span style="color:#ff6b6b">риск при сокращении федерального финансирования РАН</span></li>
</ul>`
      },
      {
        title: 'ФАКТОРЫ ДЛЯ СЦЕНАРНОГО АНАЛИЗА',
        subtitle: 'Позитив и риски',
        content: `<ul>
<li><strong>Позитив:</strong> СКИФ = первый в России синхротрон мирового класса. 12 соглашений с зарубежными университетами. Якорный научный спрос на 20+ лет. Включён в «Стратегию НТР РФ до 2035 г.»</li>
<li><strong>Риски:</strong> стройка в пойме р. Иня — геологические риски (+15% к смете). Прецедент: Сколково — задержка 3 года из-за аналогичных рисков.</li>
<li><strong>Альтернатива (если НСО отказывает):</strong> Газпромбанк требует доп. залог 4,2 млрд руб. → задержка проекта 18–24 мес.</li>
</ul>`
      }
    ]
  }
};

// ─────────── БЛОКИ (для таймера) ───────────
window.BLOCKS = [
  { id: 0, name: 'Открытие', duration: 5, startSlide: 1 },
  { id: 1, name: 'Блок 1 · Матрёшка ИИ', duration: 15, startSlide: 3 },
  { id: 2, name: 'Блок 2 · Инструменты', duration: 12, startSlide: 8 },
  { id: 3, name: 'Блок 3 · Промпты + Практика', duration: 38, startSlide: 11 },
  { id: 4, name: 'Блок 4 · Документы + Практика', duration: 25, startSlide: 19 },
  { id: 5, name: 'Перерыв', duration: 15, startSlide: 22 },
  { id: 6, name: 'Блок 5 · Демо + Практика', duration: 30, startSlide: 23 },
  { id: 7, name: 'Блок 6 · Системные промпты', duration: 15, startSlide: 28 },
  { id: 8, name: 'Блок 7 · Финал', duration: 25, startSlide: 32 },
];
