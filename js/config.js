// ============================================================
//  НАСТРОЙКА ВОРКШОПА — заполните перед деплоем
// ============================================================

// PIN-код для входа в режим спикера (4 цифры)
window.SPEAKER_PIN = "2204"; // 22 апреля = дата воркшопа

// Firebase конфиг — получите на https://firebase.google.com
// Если оставить как есть — сайт работает в LOCAL режиме (только на одном устройстве)
window.FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  databaseURL:       "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId:         "YOUR_PROJECT",
  storageBucket:     "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// Если true — Firebase не используется, управление только локальное
// Автоматически переключается в true если конфиг не заполнен
window.LOCAL_MODE = (window.FIREBASE_CONFIG.apiKey === "YOUR_API_KEY");
