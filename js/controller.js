(() => {
  "use strict";
  const controller = document.querySelector("[data-controller]");
  if (!controller) return;

  const controls = ".d-pad, .controller-buttons i, .controller-bottom i";
  const keyboardControl = controller.querySelector(".controller-buttons i:nth-child(3)");
  let pointerId = null;
  let activeKey = null;
  let pressedAt = 0;
  let releaseTimer = 0;
  let pressedControl = null;

  function reset() {
    window.clearTimeout(releaseTimer);
    controller.classList.remove("is-pressed");
    pressedControl?.classList.remove("is-pressed");
    pressedControl = null;
    pointerId = null;
    activeKey = null;
  }

  function press(target) {
    reset();
    pressedAt = performance.now();
    pressedControl = target.closest(controls);
    pressedControl?.classList.add("is-pressed");
    controller.classList.add("is-pressed");
  }

  function release() {
    pointerId = null;
    activeKey = null;
    // Keep even a quick tap visible; a held press lasts until release.
    releaseTimer = window.setTimeout(reset, Math.max(0, 120 - (performance.now() - pressedAt)));
  }

  controller.addEventListener("pointerdown", event => {
    if (event.button !== 0 || pointerId !== null || activeKey !== null) return;
    press(event.target);
    pointerId = event.pointerId;
  });
  window.addEventListener("pointerup", event => {
    if (event.pointerId === pointerId) release();
  });
  const cancelPointer = event => {
    if (event.pointerId === pointerId) reset();
  };
  controller.addEventListener("pointerleave", cancelPointer);
  window.addEventListener("pointercancel", cancelPointer);

  controller.addEventListener("keydown", event => {
    if (event.key !== " " && event.key !== "Enter") return;
    event.preventDefault();
    if (event.repeat || pointerId !== null || activeKey !== null) return;
    press(keyboardControl);
    activeKey = event.key;
  });
  controller.addEventListener("keyup", event => {
    if (event.key !== activeKey) return;
    event.preventDefault();
    release();
  });
  // Assistive technology can activate a button without pointer or key events.
  controller.addEventListener("click", event => {
    if (event.detail !== 0 || pointerId !== null || activeKey !== null) return;
    press(keyboardControl);
    release();
  });
  controller.addEventListener("blur", reset);
  window.addEventListener("blur", reset);
  window.addEventListener("pagehide", reset);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) reset();
  });
})();
