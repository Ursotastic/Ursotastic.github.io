// Builds the individual PROJECT DETAIL page (project.html) from projects.js.
// You don't need to edit this file — edit projects.js instead.

function buildMediaHTML(media) {
  if (!media) return "";
  if (media.type === "image") return `<img src="${media.src}" alt="Project media" loading="lazy" />`;
  if (media.type === "video") return `<video src="${media.src}" muted loop playsinline controls></video>`;
  if (media.type === "youtube") {
    return `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${media.src}"
              title="Project video" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen style="aspect-ratio:16/9;"></iframe>`;
  }
  return "";
}

function getIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("project-detail");
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (typeof projects === "undefined") {
    container.innerHTML = "<p>Could not load project data.</p>";
    return;
  }

  const id = getIdFromURL();
  const project = projects.find(p => p.id === id);

  if (!project) {
    container.innerHTML = `<p>Project not found. <a href="games.html">Go back to all projects</a>.</p>`;
    return;
  }

  document.title = `${project.title} — Simon Bergstedt`;

  const tagsHTML = (project.tags || [])
    .map(t => `<span class="tag">${t}</span>`).join("");

  const detailsHTML = (project.details || [project.description || ""])
    .map(paragraph => `<p>${paragraph}</p>`).join("");

  const galleryHTML = (project.gallery || []).length
    ? `<div class="detail-gallery">${project.gallery.map(m => `<div class="gallery-item">${buildMediaHTML(m)}</div>`).join("")}</div>`
    : "";

  const linkHTML = project.link
    ? `<a class="card-link" href="${project.link}" target="_blank" rel="noopener">${project.linkLabel || "View Project"} &rarr;</a>`
    : "";

  container.innerHTML = `
    <div class="detail-media">${buildMediaHTML(project.media)}</div>
    <h1 class="detail-title">${project.title}</h1>
    <p class="card-meta">${project.studio ? project.studio + " • " : ""}${project.dates || ""}</p>
    <div class="card-tags">${tagsHTML}</div>
    <div class="detail-body">${detailsHTML}</div>
    ${galleryHTML}
    ${linkHTML}
  `;
});
