/* ============================================================
   FreeReel catalog
   ------------------------------------------------------------
   Each film needs:
     id          → identifier on the source (see below)
     source      → "archive" | "youtube" | "vimeo"
     title
     year
     director
     runtime
     genres      → array of strings (used for rows)
     description
     featured    → optional. Set true on ONE film for the hero.

   HOW TO GET AN ID:
   - Internet Archive: open the film's page, the ID is the last
     part of the URL. e.g. archive.org/details/night_of_the_living_dead
     → id = "night_of_the_living_dead"
   - YouTube: the ID is the part after "watch?v="
   - Vimeo: the number after vimeo.com/

   Verify each Archive ID by visiting the page first — if the
   page works, the embed will work.
   ============================================================ */

window.CATALOG = [
  {
    id: "night_of_the_living_dead",
    source: "archive",
    title: "Night of the Living Dead",
    year: 1968,
    director: "George A. Romero",
    runtime: "96 min",
    genres: ["Horror", "Classic"],
    description: "A group of strangers barricade themselves in a Pennsylvania farmhouse as the recently deceased rise and attack the living. The film that defined the modern zombie genre.",
    featured: true
  },
  {
    id: "Nosferatu_1922",
    source: "archive",
    title: "Nosferatu",
    year: 1922,
    director: "F. W. Murnau",
    runtime: "94 min",
    genres: ["Horror", "Silent Era"],
    description: "An unauthorized adaptation of Dracula and the oldest surviving vampire film. A defining work of German Expressionist cinema."
  },
  {
    id: "TheCabinetOfDrCaligari",
    source: "archive",
    title: "The Cabinet of Dr. Caligari",
    year: 1920,
    director: "Robert Wiene",
    runtime: "76 min",
    genres: ["Horror", "Silent Era"],
    description: "A hypnotist uses a somnambulist to commit murders in a twisted, painted world. The landmark of German Expressionism."
  },
  {
    id: "TheGeneral1926",
    source: "archive",
    title: "The General",
    year: 1926,
    director: "Buster Keaton",
    runtime: "78 min",
    genres: ["Comedy", "Silent Era"],
    description: "A Southern engineer pursues Union spies who have stolen his locomotive — and the woman he loves. Keaton's masterpiece."
  },
  {
    id: "Plan_9_from_Outer_Space_1959",
    source: "archive",
    title: "Plan 9 from Outer Space",
    year: 1959,
    director: "Ed Wood",
    runtime: "79 min",
    genres: ["Sci-Fi", "Cult"],
    description: "Aliens resurrect the dead to stop humanity from destroying the universe. Famously called the worst film ever made — and beloved for it."
  },
  {
    id: "CarnivalOfSouls",
    source: "archive",
    title: "Carnival of Souls",
    year: 1962,
    director: "Herk Harvey",
    runtime: "78 min",
    genres: ["Horror", "Cult"],
    description: "After surviving a car crash, a woman is drawn to an abandoned lakeside pavilion by strange, ghostly figures."
  },
  {
    id: "Detour_1945",
    source: "archive",
    title: "Detour",
    year: 1945,
    director: "Edgar G. Ulmer",
    runtime: "68 min",
    genres: ["Film Noir", "Classic"],
    description: "A piano player hitchhiking to Los Angeles gets tangled in a death that isn't his. One of the bleakest, tightest noirs ever made."
  },
  {
    id: "his_girl_friday",
    source: "archive",
    title: "His Girl Friday",
    year: 1940,
    director: "Howard Hawks",
    runtime: "92 min",
    genres: ["Comedy", "Classic"],
    description: "A newspaper editor tries to stop his ex-wife and star reporter from quitting — and remarrying — by dangling one last scoop."
  },
  {
    id: "Metropolis1927",
    source: "archive",
    title: "Metropolis",
    year: 1927,
    director: "Fritz Lang",
    runtime: "153 min",
    genres: ["Sci-Fi", "Silent Era"],
    description: "In a futuristic city divided between elites and workers, a young man falls for a prophet of the underclass. The blueprint for every sci-fi film since."
  },
  {
    id: "TheKid1921",
    source: "archive",
    title: "The Kid",
    year: 1921,
    director: "Charlie Chaplin",
    runtime: "68 min",
    genres: ["Comedy", "Drama", "Silent Era"],
    description: "The Tramp raises an abandoned child as his own. Chaplin's first feature — and one of the most moving comedies ever made."
  },
  {
    id: "DOA_1949",
    source: "archive",
    title: "D.O.A.",
    year: 1949,
    director: "Rudolph Maté",
    runtime: "83 min",
    genres: ["Film Noir", "Classic"],
    description: "An accountant learns he's been fatally poisoned and has days to find his own killer. A race against time in classic noir style."
  },
  {
    id: "TheLastManOnEarth1964",
    source: "archive",
    title: "The Last Man on Earth",
    year: 1964,
    director: "Ubaldo Ragona",
    runtime: "86 min",
    genres: ["Sci-Fi", "Horror", "Cult"],
    description: "Vincent Price is the sole survivor of a plague that turned everyone else into vampire-like creatures. The first adaptation of I Am Legend."
  }
];
