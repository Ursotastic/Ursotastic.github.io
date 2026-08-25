/*
  ============================================================
   PROJECTS DATA
  ============================================================
  This is the ONLY file you need to edit to add or update
  projects, awards, and social links. index.html and script.js
  will read this data automatically and build the page for you.

  HOW TO ADD A NEW PROJECT:
  1. Put your image or video file inside the /media folder.
     Example: media/my-game-screenshot.jpg
  2. Copy one of the objects below (the { ... } block) and
     paste it into the "projects" array.
  3. Edit the fields (title, studio, dates, description, media, link, tags).
  4. Set "featured: true" for big showcase cards (top of page),
     or "featured: false" for the smaller grid further down.
  5. Save the file, commit, and push to GitHub. Done.

  MEDIA TYPES SUPPORTED:
  - "image" -> jpg, png, gif, webp
  - "video" -> mp4 (for a video you host in the media folder)
  - "youtube" -> just paste the YouTube video ID (the part after v=)
*/

const projects = [
  {
    title: "My Cool Unreal Project",
    studio: "Solo Project",              // or team/company name
    dates: "Jan 2026 - Present",
    description: "A short, punchy description of what the project is, what you built, and what tech was used (e.g. C++ interaction system, Blueprint UI, AI perception).",
    tags: ["Unreal Engine", "C++", "Gameplay Systems"],
    media: { type: "image", src: "media/project1-cover.jpg" },
    link: "https://github.com/yourusername/your-repo",
    linkLabel: "View on GitHub",
    featured: true
  },
  {
    title: "Escape Room Puzzle Prototype",
    studio: "Team Project (course)",
    dates: "Sep 2025 - Dec 2025",
    description: "Designed and implemented modular puzzle and interaction systems, including door logic, item pickups, and sound-triggered events, in a small team using Trello and Git.",
    tags: ["Blueprints", "Puzzle Design", "Git"],
    media: { type: "youtube", src: "dQw4w9WgXcQ" },
    link: "",
    linkLabel: "",
    featured: true
  },
  {
    title: "Small Game Jam Entry",
    studio: "Game Jam",
    dates: "Mar 2026",
    description: "A quick 48-hour prototype exploring AI hearing and stealth mechanics.",
    tags: ["Game Jam", "AI Perception"],
    media: { type: "image", src: "media/jam-cover.jpg" },
    link: "",
    linkLabel: "",
    featured: false
  }
];

/*
  ============================================================
   AWARDS / HIGHLIGHTS (optional)
  ============================================================
  Add or remove strings freely. Delete the whole "awards" const
  and its section in index.html if you don't want this block.
*/
const awards = [
  "Example: Best Student Project — Game Dev Course Showcase 2026",
  "Example: Finalist — Local Game Jam"
];

/*
  ============================================================
   SOCIAL / CONTACT LINKS
  ============================================================
  Add as many as you like. "label" is what's shown, "url" is where it goes.
*/
const socialLinks = [
  { label: "GitHub", url: "https://github.com/yourusername" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/yourusername" },
  { label: "Email", url: "mailto:you@example.com" },
  { label: "Itch.io", url: "https://yourusername.itch.io" }
];
