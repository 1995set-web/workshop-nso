// ============================================================
//  НАСТРОЙКА ВОРКШОПА
// ============================================================

// PIN-код для входа в режим спикера
window.SPEAKER_PIN = "2204"; // 22 апреля

// Firebase конфиг
window.FIREBASE_CONFIG = {
  apiKey:            "AIzaSyAmt0k78UE7hVh3l8pX71pMzPvBR6fFphw",
  authDomain:        "workshop-nso.firebaseapp.com",
  databaseURL:       "https://workshop-nso-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "workshop-nso",
  storageBucket:     "workshop-nso.firebasestorage.app",
  messagingSenderId: "540927741959",
  appId:             "1:540927741959:web:7cf2278477099b369e5aa2",
  measurementId:     "G-B3BYR0DB8E"
};

// false = используем Firebase (синхронизация между устройствами)
window.LOCAL_MODE = false;
