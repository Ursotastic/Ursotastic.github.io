/*
  ============================================================
   PROJECTS DATA
  ============================================================
  This is the ONLY file you need to edit to add or update
  projects and social links. index.html, games.html, and
  project.html all read this data automatically.

  HOW TO ADD/FILL IN A PROJECT:
  1. Put your image or video file inside the /media folder.
  2. Give it a unique "id" (no spaces) — used in the URL:
     project.html?id=your-id
  3. Fill in title, studio, dates, description, media, link, tags.
  4. "details" is an array of paragraphs shown on the project's
     own page (project.html) — write as much as you want here.
  5. "gallery" (optional) is extra images/videos on the detail page.
  6. Set "featured: true" for the top 3 homepage showcase cards
     (only the first 3 marked true will show there), or "false"
     to have it live on games.html only.
  7. Set "locked: true" if it's NDA/private — shows a lock icon
     instead of a screenshot in the games.html grid.
  8. Save, commit, and push to GitHub.

  MEDIA TYPES SUPPORTED:
  - "image" -> jpg, png, gif, webp
  - "video" -> mp4 (hosted in the media folder)
  - "youtube" -> just the YouTube video ID (the part after v=)
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
    locked: false,
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
    locked: false,
    details: [
      "Add the longer write-up here — describe the puzzle mechanics, how the team split work, and what you specifically built or debugged."
    ],
    gallery: []
  },
  {
    id: "dogknight-adventure",
    title: "DogKnight Adventure",
    studio: "Unity Project",
    dates: "TBD",
    description: "Add a short description here once you've filled in details for this Unity project.",
    tags: ["Unity", "C#"],
    media: { type: "image", src: "media/dogknight-cover.jpg" },
    link: "",
    linkLabel: "",
    featured: true,
    locked: false,
    details: [
      "Add the longer write-up here — what DogKnight Adventure is about, your role, and the systems you built."
    ],
    gallery: []
  },
  {
    id: "tricky-tower-clone",
    title: "TrickyTowerClone",
    studio: "Unity Project (optional school assignment)",
    dates: "TBD",
    description: "Add a short description here once you've filled in details for this Unity project.",
    tags: ["Unity", "C#"],
    media: { type: "image", src: "media/tricky-tower-clone-cover.jpg" },
    link: "",
    linkLabel: "",
    featured: false,
    locked: false,
    details: [
      "Add the longer write-up here — what the assignment asked for, and what you built."
    ],
    gallery: []
  },
  {
    id: "bonuses-algorithms-pathfinding",
    title: "Bonuses (Data Algorithms & Pathfinding)",
    studio: "Raylib Assignments",
    dates: "TBD",
    description: "Add a short description here once you've decided which Raylib assignment(s) to showcase (e.g. data structures, algorithms, pathfinding).",
    tags: ["Raylib", "C++", "Algorithms", "Pathfinding"],
    media: { type: "image", src: "media/bonuses-cover.jpg" },
    link: "",
    linkLabel: "",
    featured: false,
    locked: false,
    details: [
      "Add the longer write-up here — which specific assignment(s) you're showcasing and what they demonstrate."
    ],
    gallery: []
  },
  {
    id: "ai-perception",
    title: "AI Perception",
    studio: "Course Project",
    dates: "TBD",
    description: "Add a short description here once you've decided whether/how to showcase this AI perception work.",
    tags: ["AI Perception", "Unreal Engine"],
    media: { type: "image", src: "media/ai-perception-cover.jpg" },
    link: "",
    linkLabel: "",
    featured: false,
    locked: false,
    details: [
      "Add the longer write-up here."
    ],
    gallery: []
  }
];

/*
  ============================================================
   SOCIAL / CONTACT LINKS
  ============================================================
*/
const socialLinks = [
  { label: "GitHub", url: "https://github.com/Ursotastic" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/simon-bergstedt-4bb16a180" },
  { label: "Email", url: "mailto:simon.bergstedt1@gmail.com" }
];
