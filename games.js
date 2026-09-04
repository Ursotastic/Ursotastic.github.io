// Builds the "All Projects" grid on games.html from projects.js.
// You don't need to edit this file — edit projects.js instead.

function buildMediaHTML(media) {
  if (!media) return "";
  if (media.type === "image") return `<img src="${media.src}" alt="Project media" loading="lazy" />`;
  if (media.type === "video") return `<video src="${media.src}" muted loop playsinline autoplay></video>`;
  if (media.type === "youtube") {
    return `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${media.src}"
              title="Project video" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>`;
  }
  return "";
}

function buildTagsHTML(tags) {
  if (!tags || !tags.length) return "";
  return `<div class="card-tags">${tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>`;
}

function buildGridCard(p) {
  const lockOverlay = p.locked ? `<div class="lock-overlay">&#128274;</div>` : "";
  return `
    <a class="project-card grid-item" href="project.html?id=${encodeURIComponent(p.id)}">
      <div class="media-wrap">
        ${lockOverlay}
        ${p.locked ? "" : buildMediaHTML(p.media)}
      </div>
      <div class="card-body">
        <h3 class="card-title-sm">${p.title}</h3>
        <p class="card-meta-sm">${p.studio ? p.studio + " • " : ""}${p.dates || ""}</p>
        ${buildTagsHTML(p.tags)}
      </div>
      <span class="grid-arrow">&#8599;</span>
    </a>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("games-grid");
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (typeof projects !== "undefined" && grid) {
    grid.innerHTML = projects.map(buildGridCard).join("") ||
      "<p>No projects yet — add some in projects.js!</p>";
  }
});
