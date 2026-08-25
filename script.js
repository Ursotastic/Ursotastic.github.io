// Builds the HOMEPAGE cards from projects.js. Edit projects.js, not this file.

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

function buildTagsHTML(tags) {
  if (!tags || !tags.length) return "";
  return `<div class="card-tags">${tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>`;
}

// Card now links to the internal detail page (project.html?id=...)
// The external "link" (e.g. GitHub repo) still shows as a secondary button.
function buildFeaturedCard(p) {
  return `
    <article class="project-card featured">
      <a class="media-wrap" href="project.html?id=${encodeURIComponent(p.id)}">${buildMediaHTML(p.media)}</a>
      <div class="card-body">
        <h3 class="card-title"><a href="project.html?id=${encodeURIComponent(p.id)}">${p.title}</a></h3>
        <p class="card-meta">${p.studio ? p.studio + " • " : ""}${p.dates || ""}</p>
        <p class="card-desc">${p.description || ""}</p>
        ${buildTagsHTML(p.tags)}
        <a class="card-link" href="project.html?id=${encodeURIComponent(p.id)}">Read more &rarr;</a>
      </div>
    </article>`;
}

function buildGridCard(p) {
  return `
    <article class="project-card grid-item">
      <a class="media-wrap" href="project.html?id=${encodeURIComponent(p.id)}">${buildMediaHTML(p.media)}</a>
      <div class="card-body">
        <h3 class="card-title"><a href="project.html?id=${encodeURIComponent(p.id)}">${p.title}</a></h3>
        <p class="card-meta">${p.studio ? p.studio + " • " : ""}${p.dates || ""}</p>
        <p class="card-desc">${p.description || ""}</p>
        ${buildTagsHTML(p.tags)}
        <a class="card-link" href="project.html?id=${encodeURIComponent(p.id)}">Read more &rarr;</a>
      </div>
    </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const featuredContainer = document.getElementById("featured-projects");
  const gridContainer = document.getElementById("all-projects-grid");

  if (typeof projects !== "undefined" && featuredContainer && gridContainer) {
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
