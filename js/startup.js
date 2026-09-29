(() => {
  "use strict";
  const startup = document.getElementById("startup");
  if (!startup) return;

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const skipEvents = ["pointerdown", "keydown", "wheel"];
  let playing = false;
  let fallback = 0;

  function finish() {
    if (!playing) return;
    playing = false;
    window.clearTimeout(fallback);
    startup.remove();
    skipEvents.forEach(type => document.removeEventListener(type, finish, true));
  }

  function start() {
    if (playing) return;
    if (motion.matches) {
      startup.remove();
      return;
    }

    playing = true;
    if (!startup.isConnected) document.body.prepend(startup);
    startup.hidden = false;
    skipEvents.forEach(type => document.addEventListener(type, finish, { capture: true, passive: true }));
    // The exit completes at 1.95s; also finish if CSS animations are interrupted.
    fallback = window.setTimeout(finish, 2300);
  }

  startup.addEventListener("animationend", event => {
    if (event.target === startup && event.animationName === "startup-exit") finish();
  });
  motion.addEventListener("change", () => {
    if (motion.matches) finish();
  });
  window.addEventListener("pagehide", finish);
  // A cached history entry resumes this script instead of running it again.
  window.addEventListener("pageshow", event => {
    if (event.persisted) start();
  });

  start();
})();
