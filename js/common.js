(() => {
  "use strict";
  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const mediaPath = value => {
    if (typeof value !== "string" || !value.trim()) return "./assets/images/placeholder.svg";
    try {
      const url = new URL(value, document.baseURI);
      return ["http:", "https:", "file:"].includes(url.protocol) ? value : "./assets/images/placeholder.svg";
    } catch { return "./assets/images/placeholder.svg"; }
  };
  const site = window.EXHIBITION || {};
  document.querySelectorAll("[data-site-name]").forEach(node => { node.textContent = site.name || "GAME LAB."; });
  document.querySelectorAll("[data-site-edition]").forEach(node => { node.textContent = `${site.year || "2026"} EDITION`; });
  document.querySelectorAll("[data-festival-name]").forEach(node => { node.textContent = site.festivalName || "ゲーム作品展"; });
  document.querySelectorAll("[data-exhibition-message]").forEach(node => { node.textContent = site.message || ""; });
  document.querySelectorAll("[data-copyright]").forEach(node => { node.textContent = `© ${site.year || "2026"} ${site.name || "GAME LAB."}`; });
  if (!site.sampleMode) document.querySelectorAll(".sample-badge").forEach(node => node.remove());

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let observer;
  if ("IntersectionObserver" in window && !reducedMotion.matches) {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
  }
  function observeReveal(root = document) {
    root.querySelectorAll("[data-reveal]").forEach(node => {
      if (observer) { node.classList.add("will-reveal"); observer.observe(node); }
    });
  }
  // A missing user-supplied image falls back once, without an error loop.
  document.addEventListener("error", event => {
    const target = event.target;
    if (target instanceof HTMLImageElement && !target.dataset.fallback) {
      target.dataset.fallback = "true";
      target.src = "./assets/images/placeholder.svg";
    }
  }, true);
  window.Site = { escapeHTML, mediaPath, observeReveal };
})();
