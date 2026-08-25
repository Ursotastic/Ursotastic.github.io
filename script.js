// This file reads the data in projects.js and builds the page.
// You normally don't need to edit this file — just edit projects.js.

function buildMediaHTML(media) {
  if (!media) return "";
  if (media.type === "image") {
    return `<img src="${media.src}" alt="Project media" loading="lazy" />`;
  }
  if (media.type === "video") {
    return `<video src="${media.src}" muted loop playsinline controls></video>`;
  }
  if (media.type === "youtube") {
    return `<iframe width="100%" height="100%"
              src="https://www.youtube.com/embed/${media.src}"
              title="Project video" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen style="aspect-ratio:16/9;"></iframe>`;
  }
  return "";
}

function buildTagsHTML(tags) {
  if (!tags || !tags.length) return "";
  return `<div class="card-tags">${tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>`;
}

function buildLinkHTML(link, label) {
  if (!link) return "";
  return `<a class="card-link" href="${link}" target="_blank" rel="noopener">${label || "View Project"} &rarr;</a>`;
}

function buildFeaturedCard(p) {
  return `
    <article class="project-card featured">
      <div class="media-wrap">${buildMediaHTML(p.media)}</div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <p class="card-meta">${p.studio ? p.studio + " • " : ""}${p.dates || ""}</p>
        <p class="card-desc">${p.description || ""}</p>
        ${buildTagsHTML(p.tags)}
        ${buildLinkHTML(p.link, p.linkLabel)}
      </div>
    </article>`;
}

function buildGridCard(p) {
  return `
    <article class="project-card grid-item">
      <div class="media-wrap">${buildMediaHTML(p.media)}</div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <p class="card-meta">${p.studio ? p.studio + " • " : ""}${p.dates || ""}</p>
        <p class="card-desc">${p.description || ""}</p>
        ${buildTagsHTML(p.tags)}
        ${buildLinkHTML(p.link, p.linkLabel)}
      </div>
    </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const featuredContainer = document.getElementById("featured-projects");
  const gridContainer = document.getElementById("all-projects-grid");

  if (typeof projects !== "undefined") {
    const featured = projects.filter(p => p.featured);
    const rest = projects.filter(p => !p.featured);

    featuredContainer.innerHTML = featured.map(buildFeaturedCard).join("") ||
      "<p>No featured projects yet — add some in projects.js!</p>";

    gridContainer.innerHTML = rest.map(buildGridCard).join("") ||
      "<p>No other projects yet — add some in projects.js!</p>";
  }

  const awardsList = document.getElementById("awards-list");
  if (typeof awards !== "undefined" && awardsList) {
    awardsList.innerHTML = awards.map(a => `<li>${a}</li>`).join("");
  }

  const socialContainer = document.getElementById("social-links");
  if (typeof socialLinks !== "undefined" && socialContainer) {
    socialContainer.innerHTML = socialLinks
      .map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`)
      .join("");
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
