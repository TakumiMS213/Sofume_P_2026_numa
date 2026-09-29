(() => {
  "use strict";
  const startup = document.getElementById("startup");
  if (!startup) return;

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const navigation = performance.getEntriesByType("navigation")[0];
  const storageKey = `game-exhibition:startup:${new URL(".", location.href).pathname}`;
  let seen = false;
  try { seen = sessionStorage.getItem(storageKey) === "shown"; } catch { /* Storage may be disabled. */ }

  // Direct section links and return visits go straight to the exhibition.
  if (motion.matches || seen || location.hash || navigation?.type === "back_forward") {
    startup.remove();
    return;
  }

  let finished = false;
  const skipEvents = ["pointerdown", "keydown", "wheel"];
  function finish() {
    if (finished) return;
    finished = true;
    window.clearTimeout(fallback);
    startup.remove();
    skipEvents.forEach(type => document.removeEventListener(type, finish, true));
    motion.removeEventListener("change", onMotionChange);
    window.removeEventListener("pagehide", finish);
  }
  function onMotionChange() {
    if (motion.matches) finish();
  }

  // Always remove the curtain, even if CSS animations are disabled or interrupted.
  const fallback = window.setTimeout(finish, 1900);
  startup.addEventListener("animationend", event => {
    if (event.target === startup && event.animationName === "startup-exit") finish();
  });
  skipEvents.forEach(type => document.addEventListener(type, finish, { capture: true, passive: true }));
  motion.addEventListener("change", onMotionChange);
  window.addEventListener("pagehide", finish);

  try { sessionStorage.setItem(storageKey, "shown"); } catch { /* The animation still works without storage. */ }
  startup.hidden = false;
})();
