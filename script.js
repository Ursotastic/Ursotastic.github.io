// Builds the HOMEPAGE featured cards from projects.js. Edit projects.js, not this file.

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

// Compact showcase card: text on top, media below with a "Read more" overlay button.
function buildFeaturedCard(p) {
  const lockOverlay = p.locked ? `<div class="lock-overlay">&#128274;</div>` : "";
  return `
    <article class="project-card featured">
      <div class="card-body">
        <h3 class="card-title"><a href="project.html?id=${encodeURIComponent(p.id)}">${p.title}</a></h3>
        <p class="card-desc">${p.description || ""}</p>
        <p class="card-meta">Developed by: <strong>${p.studio || ""}</strong><br />${p.dates || ""}</p>
      </div>
      <a class="media-wrap" href="project.html?id=${encodeURIComponent(p.id)}">
        ${lockOverlay}
        ${buildMediaHTML(p.media)}
        <span class="read-more-pill">Read More</span>
      </a>
    </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const featuredContainer = document.getElementById("featured-projects");

  if (typeof projects !== "undefined" && featuredContainer) {
    const featured = projects.filter(p => p.featured).slice(0, 3);

    featuredContainer.innerHTML = featured.map(buildFeaturedCard).join("") ||
      "<p>No featured projects yet — mark some as featured: true in projects.js!</p>";
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
