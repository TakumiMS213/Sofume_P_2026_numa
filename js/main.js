(() => {
  "use strict";
  const { escapeHTML: esc, mediaPath, observeReveal, gameTags } = window.Site;
  const games = window.GAMES || [];
  const grid = document.getElementById("game-grid");
  const filters = document.getElementById("filters");
  const tags = [...new Set(games.flatMap(gameTags))];
  const selectedTags = new Set();
  document.title = `${window.EXHIBITION.festivalName} ${window.EXHIBITION.year} — ${window.EXHIBITION.name}`;

  function render() {
    const visible = games.filter(game => [...selectedTags].every(tag => gameTags(game).includes(tag)));
    grid.innerHTML = visible.length ? visible.map(game => {
      return `<article class="game-card" data-reveal><a class="game-card-link" href="./game.html?id=${encodeURIComponent(game.id)}" aria-label="${esc(game.title)}の詳細・操作方法を見る"><div class="card-image"><img src="${esc(mediaPath(game.icon))}" alt="${esc(game.iconAlt || game.title + 'の作品アイコン')}" width="600" height="600" loading="lazy" decoding="async"></div>${gameTags(game).length ? `<div class="card-tags" role="group" aria-label="ジャンル・特徴">${gameTags(game).map(tag => `<span>${esc(tag)}</span>`).join("")}</div>` : ""}<div class="card-title-row"><h3>${esc(game.title)}</h3><span class="card-arrow" aria-hidden="true">→</span></div>${game.subtitle ? `<p class="card-subtitle">${esc(game.subtitle)}</p>` : ""}<div class="card-meta">${game.players ? `<span><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="6" r="3"/><path d="M4 17v-2a6 6 0 0 1 12 0v2"/></svg>${esc(game.players)}</span>` : ""}${game.playTime ? `<span><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7"/><path d="M10 5v5l3 2"/></svg>${esc(game.playTime)}</span>` : ""}<span class="card-detail-label">詳細・操作方法</span></div></a></article>`;
    }).join("") : `<p class="notice">${games.length ? '選択したタグすべてに当てはまる作品はありません。タグを減らすか「すべて」を選んでください。' : '作品はただいま準備中です。もうしばらくお待ちください。'}</p>`;
    document.getElementById("result-count").textContent = `${visible.length} / ${games.length}作品`;
    filters.querySelectorAll("button").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.tag ? selectedTags.has(button.dataset.tag) : selectedTags.size === 0)));
    observeReveal(grid);
  }
  [null, ...tags].forEach(tag => {
    const button = document.createElement("button");
    button.type = "button";
    if (tag !== null) button.dataset.tag = tag;
    button.className = "filter-button";
    button.textContent = tag ?? "すべて";
    button.addEventListener("click", () => {
      if (tag === null) selectedTags.clear();
      else if (selectedTags.has(tag)) selectedTags.delete(tag);
      else selectedTags.add(tag);
      render();
      const url = new URL(location.href);
      url.searchParams.delete("genre");
      url.searchParams.delete("tag");
      selectedTags.forEach(value => url.searchParams.append("tag", value));
      history.replaceState(null, "", url);
    });
    filters.append(button);
  });
  const params = new URLSearchParams(location.search);
  const initialTags = params.has("tag") ? params.getAll("tag") : [params.get("genre")];
  initialTags.filter(tag => tags.includes(tag)).forEach(tag => selectedTags.add(tag));
  render();
})();
