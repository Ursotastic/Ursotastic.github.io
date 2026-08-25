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
    title: "World Interactive System",
    studio: "School team project (NDA)",              // or team/company name
    dates: "July 2026 - August 2026",
    description: "A school project towards a external company. My group were to create a ambient NPC dialogue system & a electrical system for their game in Unreal Engine 5.6, C++, Blueprints, interaction systems. Goal was to make systems as modular and decpupled as possible to integrate to the clients game.",
    tags: ["Unreal Engine", "C++", "Blueprints", "Interactive Systems"],
    media: { type: "image", src: "media/project1-cover.jpg" },
    link: "https://github.com/yourusername/your-repo",
    linkLabel: "View on GitHub",
    featured: true
  },
  {
    title: "Escape Room Puzzle Prototype",
    studio: "Team Project (course)",
    dates: "June 2026 - July 2026",
    description: "Designed and implemented modular puzzle and interaction systems, including door logic, item pickups, and sound-triggered events, in a small team using Trello and Git.",
    tags: ["Blueprints", "Puzzle Design", "Git"],
    media: { type: "youtube", src: "NpEaa2P7qZI" },
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
   SOCIAL / CONTACT LINKS
  ============================================================
  Add as many as you like. "label" is what's shown, "url" is where it goes.
*/
const socialLinks = [
  { label: "GitHub", url: "https://github.com/Ursotastic" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/simon-bergstedt-4bb16a180" },
  { label: "Email", url: "mailto:simon.bergstedt1@gmail.com" },
  { label: "Itch.io", url: "https://yourusername.itch.io" }
];
