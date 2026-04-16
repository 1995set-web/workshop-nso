// ============================================================
//  SYNC — Firebase / Local sync module
// ============================================================

window.Sync = (function () {
  let db = null;
  let isConnected = false;
  const listeners = {};

  // ── Init ──────────────────────────────────────────────────
  function init() {
    if (window.LOCAL_MODE) {
      console.log('[Sync] Running in LOCAL mode (no Firebase)');
      return;
    }
    try {
      firebase.initializeApp(window.FIREBASE_CONFIG);
      db = firebase.database();
      // Connection state listener
      firebase.database().ref('.info/connected').on('value', (snap) => {
        isConnected = snap.val() === true;
        document.getElementById('offline-notice')?.classList.toggle('visible', !isConnected);
      });
      console.log('[Sync] Firebase connected');
    } catch (e) {
      console.warn('[Sync] Firebase init failed, falling back to LOCAL mode:', e);
      window.LOCAL_MODE = true;
    }
  }

  // ── Listen ────────────────────────────────────────────────
  function on(path, callback) {
    if (window.LOCAL_MODE) return; // no remote sync in local mode
    db.ref(path).on('value', (snap) => callback(snap.val()));
  }

  // ── Write (speaker) ───────────────────────────────────────
  function set(path, value) {
    if (window.LOCAL_MODE) {
      // Dispatch local event so same-device participant iframe could listen
      window.dispatchEvent(new CustomEvent('sync:' + path.replace(/\//g, ':'), { detail: value }));
      return;
    }
    db.ref(path).set(value);
  }

  // ── Push (Q&A) ────────────────────────────────────────────
  function push(path, value) {
    if (window.LOCAL_MODE) return null;
    return db.ref(path).push(value);
  }

  // ── Presence ──────────────────────────────────────────────
  function trackPresence(onCount) {
    if (window.LOCAL_MODE) { onCount(1); return; }
    const presenceRef = db.ref('presence/' + generateId());
    presenceRef.set(true);
    presenceRef.onDisconnect().remove();
    db.ref('presence').on('value', (snap) => {
      onCount(snap.numChildren() || 0);
    });
  }

  // ── Utils ─────────────────────────────────────────────────
  function generateId() {
    return Math.random().toString(36).slice(2);
  }

  return { init, on, set, push, trackPresence };
})();
