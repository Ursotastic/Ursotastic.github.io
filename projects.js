/*
  ============================================================
   PROJECTS DATA
  ============================================================
  This is the ONLY file you need to edit to add or update
  projects, awards, and social links. index.html, script.js and
  project-page.js will read this data automatically.

  HOW TO ADD A NEW PROJECT:
  1. Put your image or video file inside the /media folder.
     Example: media/my-game-screenshot.jpg
  2. Copy one of the objects below (the { ... } block) and
     paste it into the "projects" array.
  3. Give it a unique "id" (no spaces) — this becomes the URL
     for its detail page: project.html?id=your-id
  4. Edit title, studio, dates, description, media, link, tags.
  5. "details" is an array of paragraphs shown on the project's
     own page (project.html) — write as much as you want here.
  6. "gallery" (optional) is extra images/videos shown below the
     description on the detail page.
  7. Set "featured: true" for big showcase cards (top of page),
     or "featured: false" for the smaller grid further down.
  8. Save, commit, and push to GitHub. Done.

  MEDIA TYPES SUPPORTED:
  - "image" -> jpg, png, gif, webp
  - "video" -> mp4 (for a video you host in the media folder)
  - "youtube" -> just paste the YouTube video ID (the part after v=)
*/

const projects = [
  {
    id: "world-interactive-system",
    title: "World Interactive System",
    studio: "School team project (NDA)",
    dates: "July 2026 - August 2026",
    description: "A school project towards a external company. My group were to create a ambient NPC dialogue system & a electrical system for their game in Unreal Engine 5.6, C++, Blueprints, interaction systems. Goal was to make systems as modular and decoupled as possible to integrate to the clients game.",
    tags: ["Unreal Engine", "C++", "Blueprints", "Interactive Systems"],
    media: { type: "image", src: "media/project1-cover.jpg" },
    link: "https://github.com/yourusername/your-repo",
    linkLabel: "View on GitHub",
    featured: true,
    details: [
      "Add the longer write-up for this project here — your role, the systems you personally built (e.g. the NPC dialogue system or electrical system), and any interesting technical decisions or challenges since it was NDA/client work."
    ],
    gallery: []
  },
  {
    id: "escape-room-prototype",
    title: "Escape Room Puzzle Prototype",
    studio: "Team Project (course)",
    dates: "June 2026 - July 2026",
    description: "Designed and implemented modular puzzle and interaction systems, including door logic, item pickups, and sound-triggered events, in a small team using Trello and Git.",
    tags: ["Unreal Engine", "C++", "Blueprints", "Game systems", "Puzzle Design"],
    media: { type: "youtube", src: "NpEaa2P7qZI" },
    link: "",
    linkLabel: "",
    featured: true,
    details: [
      "Add the longer write-up here — describe the puzzle mechanics, how the team split work, and what you specifically built or debugged."
    ],
    gallery: []
  },
  {
    id: "game-jam-entry",
    title: "Small Game Jam Entry",
    studio: "Game Jam",
    dates: "Mar 2026",
    description: "A quick 48-hour prototype exploring AI hearing and stealth mechanics.",
    tags: ["Game Jam", "AI Perception"],
    media: { type: "image", src: "media/jam-cover.jpg" },
    link: "",
    linkLabel: "",
    featured: false,
    details: [
      "Add the longer write-up here — the jam theme, time constraints, and what you learned."
    ],
    gallery: []
  }
];

/*
  ============================================================
   AWARDS / HIGHLIGHTS (optional)
  ============================================================
  You removed this array previously — that's fine, script.js
  checks for it and simply skips the section if it's missing.
  Uncomment and fill in below if you want it back:

  const awards = [
    "Example: Best Student Project — Game Dev Course Showcase 2026"
  ];
*/

/*
  ============================================================
   SOCIAL / CONTACT LINKS
  ============================================================
*/
const socialLinks = [
  { label: "GitHub", url: "https://github.com/Ursotastic" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/simon-bergstedt-4bb16a180" },
  { label: "Email", url: "mailto:simon.bergstedt1@gmail.com" },
  { label: "Itch.io", url: "https://yourusername.itch.io" }
];
