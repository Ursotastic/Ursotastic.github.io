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
    media: { type: "youtube", src: "mSRLabb09kg" },
    link: "",
    linkLabel: "",
    featured: true,
    locked: false,
    details: [
      "You play a space ranger who crashes into an abandoned space station. The station's AI, Basil, traps you in a loop and tries to manipulate you into staying. You explore, listen to Basil for clues, collect items and 	solve 	three puzzles to escape. Puzzles 1 and 2 must both be solved before puzzle 3 unlocks.",
      "<strong>My role:</strong> I was responsible for core systems and puzzle programming in a team of four. Before the project officially started, I built the shared base so everyone could start from the same foundation. It 	included character movement, interaction, pickups, an inventory, a door class, an interaction interface and the start of the story subsystem. I also set up the repository and wrote the setup guide in the readme.",
      "<strong>Story subsystem:</strong> I expanded the base into a game-instance subsystem that keeps narrative flags and progress. It separates permanent flags from loop-scoped flags, which are cleared on each new loop. That 	way puzzle and story state can reset without losing permanent progress. It also broadcasts story events, such as a wrong attempt or a failed puzzle, so the UI and audio can react without being tied to the puzzle code.",
      "<strong>USB puzzle:</strong> Puzzle 3, that I developed, is a three-slot USB insertion puzzle. In the first version, the game checked each insertion as you made it. In the second version, the player can insert any USB in 	any slot, and the puzzle checks the combination once all slots are filled. A wrong combination counts as an failed attempt. After 3 wrong attempts, a game over overlay appears. A correct combination solves the puzzle. 	Building and polishing it took about two weeks.",
      "<strong>Narrative audio triggers:</strong> I built reusable narrative triggers that read the current loop index from the subsystem. The same trigger placed in a room can play different lines on different loops. I recorded 	and edited 25 voice files to sound like an AI robot. 16 to 17 of them are used in the level, and some are used as feedback for puzzles 1 and 2 and for item pickups.",
      "<strong>Team and tools:</strong> We worked with Trello and Git. I also helped teammates when source control caused problems, and I managed the presentation and finalized the GDD. The level uses the Dystopian Lab asset pack 	from Fab."
    ],
    gallery: []
  },
  {
    id: "dogknight-adventure",
    title: "DogKnight Adventure",
    studio: "Unity team project (course)",
    dates: "December 2025 - January 2026",
    description: "My first group project, built in Unity and C# over 5 weeks. I was the UI/HUD programmer and designer. I also built the experience system and redesigned the second ability for combat.",
    tags: ["Unity", "C#"],
    media: { type: "youtube", src: "1g0vwSOPTPw" },
    link: "",
    linkLabel: "",
    featured: true,
    locked: false,
    details: [
      "DogKnight Adventure was my first full group project, a 5-week team project made in Unity with C#. My main role was UI/HUD programmer and designer. I also worked on gameplay, combat features, on documentation and 	build 	tasks.",
      "<strong>UI and HUD:</strong> I made early design sketches, then built most of the UI. The UI reads the data of the equipped potions and abilities, checks their cooldowns, and uses interfaces to decide whether each one can 	be used. Because of this, the UI works with any ability, including ones with their own cooldowns and rules, without UI code changes. I designed it this way because we expected many abilities to be added. When requirements 	changed, I reworked parts of it.",
      "<strong>Gameplay features:</strong> I implemented the experience system. I also redesigned the second ability. It was originally a full map bomb that cleared the whole level, and I changed it into a usable part of normal 	combat.",
      "<strong>Team work:</strong> We had no official project lead. I worked with the technical lead on coordination, communication and UI direction. The project taught me a lot about version control, merge conflicts and task 	ownership, and I now start new projects with clearer communication and ownership rules."
    ],
    gallery: []
  },
    {
    id: "tricky-tower-clone",
    title: "TrickyTowerClone",
    studio: "Unity project (optional school assignment)",
    dates: "November, 2025",
    description: "A physics-based tower builder in the style of Tetris, made in Unity and C#. It was my first proper Unity project, and it is playable on itch.io.",
    tags: ["Unity", "C#", "Physics", "Gameplay Programming"],
    media: { type: "image", src: "media/trickytower.png" },
    link: "https://simonbergstedt.itch.io/trickytowerclone",
    linkLabel: "Play on itch.io",
    featured: false,
    locked: false,
    details: [
      "TrickyTowerClone is my version of Tricky Towers, a modern take on Tetris where you stack blocks into a tower using physics. It was an optional school assignment to remake a classic game, and it was the first proper Unity 	project I did in schoo0l. Duration of the assignment was 2 weeks.",
      "<strong>Main challenge:</strong> The hardest decision was block placement, specifically whether the blocks should snap into place. I tried it and ended up with no snapping. The blocks follow the physics, which makes the 	tower easy to knock over and the game harder, like the original.",
      "<strong>What I learned:</strong> Making my own Tetris blocks was much harder than I expected. Getting the shapes and collisions to behave smoothly with physics took a lot of work. The project taught me the basics of C# in 	Unity and showed me how much detail goes into a game that feels simple.",
      "You can play the game in your browser on itch.io using the button below."
    ],
    gallery: [
      { type: "image", src: "media/trickyprojectpicture.png" }
    ]
  },
      {
    id: "ai-perception",
    title: "AI Perception: Stealth Guards",
    studio: "Course project (2-3 weeks)",
    dates: "May, 2026",
    description: "A stealth prequel scene for DogKnight Adventure, built in Unreal Engine 5. Two guard types use AI Perception, with sight and hearing, behaviour trees and a team alert system to patrol, investigate and chase the player.",
    tags: ["AI Perception", "Behaviour Trees", "Blueprints", "Unreal Engine", "Stealth AI"],
    media: { type: "youtube", src: "tn0Ccm_aN38" },
    link: "",
    linkLabel: "",
    featured: false,
    locked: false,
    details: [
      "This is an AI guard system built assignment, in Unreal Engine 5 as a prequel scene to DogKnight Adventure, a dungeon crawler RPG. DogKnight must sneak through a night-time forest past patrolling guards before entering the dungeon. If 	a guard catches him, the level resets and he respawns at the start.",
      "<strong>Two guard types:</strong> Sight Guards (blue glow) detect DogKnight visually and chase him. Hearing Guards (red glow) only react to sound and investigate where it came from. Both share a parent class, <em>	BP_Guard_Base</em>, but each type has its own Behaviour Tree, Blackboard and AI Controller.",
      "<strong>Behaviour Trees:</strong> Both trees use a Selector at the root. The Sight Guard has three branches in priority order: Chase, Investigate and Patrol. The Hearing Guard has no Chase branch, so it can only 	investigate or patrol. Chase and Investigate are driven by Blackboard keys (EnemyActor and InvestigateLocation) with decorators that abort lower-priority branches. Patrol uses a custom task that picks a random point 	from each guard's own patrol points array. A second custom task clears the investigate location when the guard arrives, so the tree falls back to Patrol.",
      "<strong>Perception:</strong> Sight Guards use the AI Perception sight sense. Every guard also uses the hearing sense. DogKnight's footsteps emit noise events from his movement input. He can also throw a ball that makes 	noise when it hits the ground, to lure guards away from their positions.",
      "<strong>Team alert system:</strong> When a guard sees or hears something, it calls an <em>AlertAllGuards</em> function on the Game State. That function writes the location to the <em>InvestigateLocation</em> key on every 	guard's Blackboard, so the whole guard group investigates the same spot.",
      "<strong>Scene:</strong> I built the forest from a downloaded asset and set up the lighting and sky for a night-time feel. The falling leaves and fireflies are from a free asset pack.",
      "<strong>Known limitations:</strong> Guards sometimes block each other when they all go to the same location. The catch is a simple level reset instead of an animation. Guards can also freeze while DogKnight keeps moving 	inside their hearing range. I believe the cause is that the investigate location keeps updating, but I did not have time to fix it.",
      "<strong>With more time:</strong> I would add a suspicion meter that fills up gradually before a guard starts chasing, a catch animation and game over screen, a range limit for the team alert, and real sound and animation."
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
