# Настройка Firebase (5 минут)

Сайт уже задеплоен на GitHub Pages. Без Firebase он работает в LOCAL MODE
(слайды переключаются только на одном устройстве — вашем).

Чтобы участники видели слайды синхронно — нужен Firebase (бесплатно):

## Шаги

1. Открыть https://firebase.google.com → "Get started" (нужен Google-аккаунт)
2. "Add project" → название: `workshop-nso-2026` → Continue → Continue → Create
3. В боковом меню: Build → Realtime Database → "Create database"
   → Start in **test mode** → Enable
4. Вернуться на главную проекта → "</>" (Web app) → Register app
5. Скопировать объект `firebaseConfig` из появившегося кода

6. Открыть файл `js/config.js` — вставить скопированные значения:

```js
window.FIREBASE_CONFIG = {
  apiKey:            "AIzaSy...",        // ← ваше значение
  authDomain:        "workshop-nso-2026.firebaseapp.com",
  databaseURL:       "https://workshop-nso-2026-default-rtdb.firebaseio.com",
  projectId:         "workshop-nso-2026",
  storageBucket:     "workshop-nso-2026.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123:web:abc"
};
```

7. Сохранить файл, затем в терминале:

```bash
cd ~/Desktop/workshop-nso
git add js/config.js
git commit -m "Add Firebase config"
git push
```

Через 1–2 минуты сайт будет синхронизировать слайды между всеми участниками.

## URL-адреса

- Участники (QR): https://1995set-web.github.io/workshop-nso/
- Спикер: https://1995set-web.github.io/workshop-nso/speaker.html
- PIN спикера: **2204**

## QR-код

Открыть: https://qr-code-generator.com
Вставить URL: `https://1995set-web.github.io/workshop-nso/`
Скачать PNG → распечатать 10×10 см (разложить на столы)
