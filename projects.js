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
    media: { type: "youtube", src: "FL50QjpVDX0" },
    link: "",
    linkLabel: "",
    featured: true,
    locked: false,
    details: [
      "This was a one-sprint-per-week team project with an external client. Our group of six built two standalone Unreal Engine 5.6 systems: an event-driven ambient NPC dialogue system and an electrical propagation system. The 	goal was for both to be modular, decoupled, easy for designers to use, and ready to drop into the client's existing game.",
      "<strong>My role:</strong> I was project leader and handled documentation, integration and feature programming. I managed the merge to main, ran the sprint reviews, and did the final integration pass before each review. I 	also co-developed the ElectricalPropagation plugin with a teammate.",
      "<strong>Electrical system:</strong> This is a standalone plugin built in layers. A world subsystem registry holds a graph of nodes. Any actor becomes part of the network by adding an <em>ElectricityNodeComponent</em>. 	Nodes tell the graph when their power changes through a delegate, and the graph recalculates power from the active sources. Each room has its own fusebox node, so turning off the generator cuts power everywhere, while 	turning off one fusebox only cuts that room. Rooms are wired in a star topology, but the connection API is general enough to support room-to-room propagation later.",
      "<strong>Dialogue system:</strong> NPCs talk to each other and react to world events. A Game Instance Subsystem server picks lines. A dialogue component on each actor holds its context as GameplayTags, and a playback 	component handles audio. Lines are chosen by tag matching, priority and cooldowns. Designers write the content in a browser-based authoring tool that exports JSON, which Unreal imports at startup.",
      "<strong>Demo level:</strong> Separate rooms show each feature on its own. Switching a lamp on or off interrupts an NPC conversation, and the NPCs react to the lamp's new power state. Another room shows NPCs reacting when 	water hits a live electrical source.",
      "<strong>Because of the NDA,</strong> I can't show the client's game or share the repository publicly."
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
