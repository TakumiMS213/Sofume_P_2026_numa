(() => {
  "use strict";
  const { escapeHTML: esc, mediaPath, observeReveal } = window.Site;
  const games = window.GAMES || [];
  const grid = document.getElementById("game-grid");
  const filters = document.getElementById("filters");
  const genres = ["すべて", ...new Set(games.map(game => game.genre).filter(Boolean))];
  document.title = `${window.EXHIBITION.name} — GAME EXHIBITION ${window.EXHIBITION.year}`;
  document.getElementById("game-total").textContent = String(games.length).padStart(2, "0");

  function render(genre) {
    const visible = games.filter(game => genre === "すべて" || game.genre === genre);
    grid.innerHTML = visible.length ? visible.map(game => {
      const number = String(games.indexOf(game) + 1).padStart(2, "0");
      return `<article class="game-card" data-reveal><a class="game-card-link" href="./game.html?id=${encodeURIComponent(game.id)}" aria-label="${esc(game.title)}の詳細・操作方法を見る"><div class="card-image"><img src="${esc(mediaPath(game.icon))}" alt="${esc(game.iconAlt || game.title + 'のゲームアイコン')}" width="600" height="600" loading="lazy" decoding="async"><span class="card-number mono">GAME / ${number}</span><span class="card-genre">${esc(game.genre)}</span></div><div class="card-title-row"><h3>${esc(game.title)}</h3><span class="card-arrow" aria-hidden="true">↗</span></div><p class="card-subtitle">${esc(game.subtitle || "")}</p><div class="card-meta"><span><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="6" r="3"/><path d="M4 17v-2a6 6 0 0 1 12 0v2"/></svg>${esc(game.players || "")}</span><span><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7"/><path d="M10 5v5l3 2"/></svg>${esc(game.playTime || "")}</span><span class="card-detail-label">作品を見る <span aria-hidden="true">↗</span></span></div></a></article>`;
    }).join("") : '<p class="notice">作品はただいま準備中です。もうしばらくお待ちください。</p>';
    document.getElementById("result-count").textContent = `${String(visible.length).padStart(2, "0")} GAMES`;
    filters.querySelectorAll("button").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.genre === genre)));
    observeReveal(grid);
  }
  genres.forEach(genre => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.genre = genre;
    button.className = "filter-button";
    button.textContent = genre;
    button.addEventListener("click", () => {
      render(genre);
      const url = new URL(location.href);
      if (genre === "すべて") url.searchParams.delete("genre"); else url.searchParams.set("genre", genre);
      history.replaceState(null, "", url);
    });
    filters.append(button);
  });
  const initialGenre = new URLSearchParams(location.search).get("genre");
  render(genres.includes(initialGenre) ? initialGenre : "すべて");
})();
