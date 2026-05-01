import { Anime, PaginatedResponse, FilterState } from "@/types";

export const ANIME_DATABASE: Anime[] = [
  {
    id: "1",
    name: "bleach",
    displayName: "Bleach",
    image: { original: "https://cdn.myanimelist.net/images/anime/3/40451.jpg" }, // MAL ID: 269
    kind: "TV",
    episodes: 366,
    episodes_aired: 366,
    score: "7.92",
    genre: ["Action", "Adventure", "Supernatural"],
    year: 2004,
    status: "completed",
    studio: "Pierrot",
    description: "Ichigo Kurosaki is an ordinary high schooler until his family is attacked by a Hollow, a corrupt spirit seeking to devour human souls. A Soul Reaper named Rukia sacrifices her powers to save them, and Ichigo must take on her role as a Soul Reaper."
  },
  {
    id: "2",
    name: "black_clover",
    displayName: "Black Clover",
    image: { original: "https://cdn.myanimelist.net/images/anime/1800/100547.jpg" }, // MAL ID: 34572
    kind: "TV",
    episodes: 170,
    episodes_aired: 170,
    score: "7.16",
    genre: ["Action", "Fantasy", "Magic"],
    year: 2017,
    status: "completed",
    studio: "Pierrot",
    description: "Asta and Yuno were abandoned at the same church and have been inseparable since. Asta dreams of becoming the Wizard King despite having no magical power, while Yuno is a prodigy. Together they will challenge fate itself."
  },
  {
    id: "3",
    name: "dragon_ball",
    displayName: "Dragon Ball Z",
    image: { original: "https://cdn.myanimelist.net/images/anime/1277/142022.jpg" }, // MAL ID: 813
    kind: "TV",
    episodes: 153,
    episodes_aired: 153,
    score: "8.68",
    genre: ["Action", "Adventure", "Martial Arts"],
    year: 1989,
    status: "completed",
    studio: "Toei Animation",
    description: "After learning that he is from another planet, a warrior named Goku and his friends are prompted to defend it from an onslaught of extraterrestrial enemies. The saga that changed anime forever."
  },
  {
    id: "4",
    name: "jujutsu_kaisen",
    displayName: "Jujutsu Kaisen",
    image: { original: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg" }, // MAL ID: 40748
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "8.78",
    genre: ["Action", "Horror", "Supernatural"],
    year: 2020,
    status: "airing",
    studio: "MAPPA",
    description: "Yuji Itadori is a high school student who swallows a cursed object and finds himself drawn into the world of Jujutsu Sorcerers, who battle cursed spirits threatening humanity."
  },
  {
    id: "5",
    name: "fma_brotherhood",
    displayName: "Fullmetal Alchemist: Brotherhood",
    image: { original: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg" }, // MAL ID: 5114
    kind: "TV",
    episodes: 64,
    episodes_aired: 64,
    score: "9.24",
    genre: ["Action", "Adventure", "Drama"],
    year: 2009,
    status: "completed",
    studio: "Bones",
    description: "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes wrong, leaving them in damaged physical forms. A masterpiece of storytelling and world-building."
  },
  {
    id: "6",
    name: "naruto",
    displayName: "Naruto",
    image: { original: "https://cdn.myanimelist.net/images/anime/1141/142503.jpg" }, // MAL ID: 20
    kind: "TV",
    episodes: 220,
    episodes_aired: 220,
    score: "8.30",
    genre: ["Action", "Adventure", "Ninja"],
    year: 2002,
    status: "completed",
    studio: "Pierrot",
    description: "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja."
  },
  {
    id: "7",
    name: "gintama",
    displayName: "Gintama",
    image: { original: "https://cdn.myanimelist.net/images/anime/10/73274.jpg" }, // MAL ID: 918
    kind: "TV",
    episodes: 367,
    episodes_aired: 367,
    score: "9.00",
    genre: ["Action", "Comedy", "Sci-Fi"],
    year: 2006,
    status: "completed",
    studio: "Sunrise",
    description: "After aliens invaded and conquered feudal Japan, a broke samurai finds work however he can, all the while searching for a reason to keep his sword. Brilliantly blends comedy with serious story arcs."
  },
  {
    id: "9",
    name: "one_piece",
    displayName: "One Piece",
    image: { original: "https://cdn.myanimelist.net/images/anime/1244/138851.jpg" }, // MAL ID: 21
    kind: "TV",
    episodes: 1030,
    episodes_aired: 1030,
    score: "8.58",
    genre: ["Action", "Adventure", "Fantasy"],
    year: 1999,
    status: "airing",
    studio: "Toei Animation",
    description: "Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever left by the legendary Pirate, Gold Roger. The greatest adventure in anime history."
  },
  {
    id: "10",
    name: "demon_slayer",
    displayName: "Demon Slayer",
    image: { original: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg" }, // MAL ID: 38000
    kind: "TV",
    episodes: 26,
    episodes_aired: 26,
    score: "8.60",
    genre: ["Action", "Historical", "Supernatural"],
    year: 2019,
    status: "airing",
    studio: "ufotable",
    description: "A family is attacked by demons and only two members survive — Tanjiro and his sister Nezuko, who is turning into a demon. Tanjiro sets out to become a demon slayer to avenge his family."
  },
  {
    id: "11",
    name: "attack_on_titan",
    displayName: "Attack on Titan",
    image: { original: "https://cdn.myanimelist.net/images/anime/10/47347.jpg" }, // MAL ID: 16498
    kind: "TV",
    episodes: 75,
    episodes_aired: 75,
    score: "9.16",
    genre: ["Action", "Drama", "Mystery"],
    year: 2013,
    status: "completed",
    studio: "WIT Studio / MAPPA",
    description: "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction."
  },
  {
    id: "12",
    name: "hunter_x_hunter",
    displayName: "Hunter x Hunter",
    image: { original: "https://cdn.myanimelist.net/images/anime/11/33657.jpg" }, // MAL ID: 11061
    kind: "TV",
    episodes: 148,
    episodes_aired: 148,
    score: "9.10",
    genre: ["Action", "Adventure", "Fantasy"],
    year: 2011,
    status: "completed",
    studio: "Madhouse",
    description: "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks his missing father who is a Hunter himself."
  },
  {
    id: "13",
    name: "boku_no_hero_academia",
    displayName: "My Hero Academia",
    image: { original: "https://cdn.myanimelist.net/images/anime/10/78745.jpg" }, // MAL ID: 31964
    kind: "TV",
    episodes: 114,
    episodes_aired: 114,
    score: "8.39",
    genre: ["Action", "Superhero", "School"],
    year: 2016,
    status: "airing",
    studio: "Bones",
    description: "In a world where most of the population possesses superpowers called Quirks, Izuku Midoriya is born without one. After a fateful meeting with the greatest hero, he inherits power and enrols in a prestigious hero academy."
  },
  {
    id: "14",
    name: "death_note",
    displayName: "Death Note",
    image: { original: "https://cdn.myanimelist.net/images/anime/9/9453.jpg" }, // MAL ID: 1535
    kind: "TV",
    episodes: 37,
    episodes_aired: 37,
    score: "9.00",
    genre: ["Thriller", "Psychological", "Supernatural"],
    year: 2006,
    status: "completed",
    studio: "Madhouse",
    description: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it."
  },
  {
    id: "15",
    name: "steins_gate",
    displayName: "Steins;Gate",
    image: { original: "https://cdn.myanimelist.net/images/anime/1935/127974.jpg" }, // MAL ID: 9253
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "9.08",
    genre: ["Sci-Fi", "Thriller", "Drama"],
    year: 2011,
    status: "completed",
    studio: "White Fox",
    description: "A group of friends accidentally invent a time machine, leading to consequences that spiral beyond their control. One of the most acclaimed psychological thrillers in anime history."
  },
  {
    id: "16",
    name: "vinland_saga",
    displayName: "Vinland Saga",
    image: { original: "https://cdn.myanimelist.net/images/anime/1500/103005.jpg" }, // MAL ID: 37521
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "8.72",
    genre: ["Action", "Historical", "Drama"],
    year: 2019,
    status: "airing",
    studio: "WIT Studio",
    description: "Thorfinn pursues a journey with his father's killer in order to take revenge and fulfill his dream to go to Vinland. A brutal, beautiful epic set in Viking Age Europe."
  },
  {
    id: "17",
    name: "tokyo_ghoul",
    displayName: "Tokyo Ghoul",
    image: { original: "https://cdn.myanimelist.net/images/anime/5/64449.jpg" }, // MAL ID: 22319
    kind: "TV",
    episodes: 12,
    episodes_aired: 12,
    score: "7.72",
    genre: ["Action", "Horror", "Supernatural"],
    year: 2014,
    status: "completed",
    studio: "Studio Pierrot",
    description: "A college student is attacked by a ghoul and becomes a half-ghoul, forced to navigate the dark world of ghouls while trying to retain his humanity."
  },
  {
    id: "18",
    name: "sword_art_online",
    displayName: "Sword Art Online",
    image: { original: "https://cdn.myanimelist.net/images/anime/11/39717.jpg" }, // MAL ID: 11757
    kind: "TV",
    episodes: 25,
    episodes_aired: 25,
    score: "7.06",
    genre: ["Action", "Romance", "Sci-Fi"],
    year: 2012,
    status: "completed",
    studio: "A-1 Pictures",
    description: "Players trapped in a virtual reality MMORPG must clear all 100 floors to escape, with death in the game meaning real death."
  },
  {
    id: "19",
    name: "neon_genesis_evangelion",
    displayName: "Neon Genesis Evangelion",
    image: { original: "https://cdn.myanimelist.net/images/anime/1314/108922.jpg" }, // MAL ID: 30
    kind: "TV",
    episodes: 26,
    episodes_aired: 26,
    score: "8.35",
    genre: ["Action", "Drama", "Mecha"],
    year: 1995,
    status: "completed",
    studio: "Gainax",
    description: "In a post-apocalyptic world, young Shinji Ikari is recruited to pilot a giant bio-machine called an Evangelion to fight mysterious beings known as Angels."
  },
  {
    id: "20",
    name: "cowboy_bebop",
    displayName: "Cowboy Bebop",
    image: { original: "https://cdn.myanimelist.net/images/anime/4/19644.jpg" }, // MAL ID: 1
    kind: "TV",
    episodes: 26,
    episodes_aired: 26,
    score: "8.78",
    genre: ["Action", "Adventure", "Sci-Fi"],
    year: 1998,
    status: "completed",
    studio: "Sunrise",
    description: "In the year 2071, a group of bounty hunters travel the solar system in their ship Bebop, chasing criminals and dealing with their own pasts."
  },
  {
    id: "21",
    name: "spirited_away",
    displayName: "Spirited Away",
    image: { original: "https://cdn.myanimelist.net/images/anime/6/79597.jpg" }, // MAL ID: 199
    kind: "Movie",
    episodes: 1,
    episodes_aired: 1,
    score: "8.91",
    genre: ["Adventure", "Fantasy", "Supernatural"],
    year: 2001,
    status: "completed",
    studio: "Studio Ghibli",
    description: "A young girl wandering into a world ruled by gods and witches, where humans are changed into beasts. A masterpiece of animation by Hayao Miyazaki."
  },
  {
    id: "22",
    name: "princess_mononoke",
    displayName: "Princess Mononoke",
    image: { original: "https://cdn.myanimelist.net/images/anime/7/75919.jpg" }, // MAL ID: 164
    kind: "Movie",
    episodes: 1,
    episodes_aired: 1,
    score: "8.63",
    genre: ["Action", "Adventure", "Fantasy"],
    year: 1997,
    status: "completed",
    studio: "Studio Ghibli",
    description: "In the 14th century, a young emperor must travel to the east to find the cure for a curse that is afflicting his kingdom."
  },
  {
    id: "23",
    name: "your_name",
    displayName: "Your Name",
    image: { original: "https://cdn.myanimelist.net/images/anime/5/87048.jpg" }, // MAL ID: 32281
    kind: "Movie",
    episodes: 1,
    episodes_aired: 1,
    score: "8.46",
    genre: ["Drama", "Romance", "Supernatural"],
    year: 2016,
    status: "completed",
    studio: "CoMix Wave Films",
    description: "Two teenagers share a profound connection after discovering they are swapping bodies. As they grow closer, they realize the clock is ticking."
  },
  {
    id: "24",
    name: "weathering_with_you",
    displayName: "Weathering with You",
    image: { original: "https://cdn.myanimelist.net/images/anime/1880/101146.jpg" }, // MAL ID: 38826
    kind: "Movie",
    episodes: 1,
    episodes_aired: 1,
    score: "8.35",
    genre: ["Drama", "Romance", "Fantasy"],
    year: 2019,
    status: "completed",
    studio: "CoMix Wave Films",
    description: "A high school boy runs away to Tokyo and meets a girl who can control the weather, changing his life forever."
  },
  {
    id: "25",
    name: "one_punch_man",
    displayName: "One Punch Man",
    image: { original: "https://onepunchman-scans.online/wp-content/uploads/2025/09/ezgif-7dd3249c14f372.jpg" }, // MAL ID: 30276
    kind: "TV",
    episodes: 12,
    episodes_aired: 12,
    score: "8.70",
    genre: ["Action", "Comedy", "Superhero"],
    year: 2015,
    status: "completed",
    studio: "Madhouse",
    description: "Saitama is a hero who can defeat any enemy with a single punch, but grows bored as he searches for a worthy opponent."
  },
  {
    id: "26",
    name: "mob_psycho_100",
    displayName: "Mob Psycho 100",
    image: { original: "https://cdn.myanimelist.net/images/anime/8/80356.jpg" }, // MAL ID: 32182
    kind: "TV",
    episodes: 12,
    episodes_aired: 12,
    score: "8.60",
    genre: ["Action", "Comedy", "Supernatural"],
    year: 2016,
    status: "completed",
    studio: "Bones",
    description: "A psychic middle school boy tries to live a normal life while suppressing his overwhelming power, guided by an unscrupulous mentor."
  },
  {
    id: "27",
    name: "re_zero",
    displayName: "Re:Zero",
    image: { original: "https://cdn.myanimelist.net/images/anime/11/79410.jpg" }, // MAL ID: 31240
    kind: "TV",
    episodes: 25,
    episodes_aired: 25,
    score: "8.23",
    genre: ["Drama", "Fantasy", "Thriller"],
    year: 2016,
    status: "airing",
    studio: "White Fox",
    description: "Subaru Natsuki is transported to another world and discovers he has the ability to rewind time upon his death, leading to a cycle of tragedy and redemption."
  },
  {
    id: "28",
    name: "the_rising_of_the_shield_hero",
    displayName: "The Rising of the Shield Hero",
    image: { original: "https://cdn.myanimelist.net/images/anime/1490/101365.jpg" }, // MAL ID: 35790
    kind: "TV",
    episodes: 25,
    episodes_aired: 25,
    score: "8.06",
    genre: ["Action", "Adventure", "Fantasy"],
    year: 2019,
    status: "airing",
    studio: "Kinema Citrus",
    description: "A college student is summoned to another world as the Shield Hero, one of four legendary heroes, but is betrayed and must rise from disgrace."
  },
  {
    id: "29",
    name: "no_game_no_life",
    displayName: "No Game No Life",
    image: { original: "https://cdn.myanimelist.net/images/anime/5/65187.jpg" }, // MAL ID: 19815
    kind: "TV",
    episodes: 12,
    episodes_aired: 12,
    score: "8.35",
    genre: ["Adventure", "Comedy", "Fantasy"],
    year: 2014,
    status: "completed",
    studio: "Madhouse",
    description: "Two hikkomori siblings are summoned to a world where all conflicts are resolved through games, and they set out to conquer the sixteen races."
  },
  {
    id: "30",
    name: "the_devil_is_a_part_timer",
    displayName: "The Devil is a Part-Timer",
    image: { original: "https://cdn.myanimelist.net/images/anime/10/50643.jpg" }, // MAL ID: 15809
    kind: "TV",
    episodes: 13,
    episodes_aired: 13,
    score: "7.90",
    genre: ["Comedy", "Fantasy", "Supernatural"],
    year: 2013,
    status: "completed",
    studio: "White Fox",
    description: "The Demon Lord Satan is transported to modern-day Tokyo and must work at a fast-food restaurant to survive while plotting his return."
  },
  {
    id: "31",
    name: "konosuba",
    displayName: "Konosuba",
    image: { original: "https://cdn.myanimelist.net/images/anime/8/77831.jpg" }, // MAL ID: 30831
    kind: "TV",
    episodes: 10,
    episodes_aired: 10,
    score: "8.12",
    genre: ["Adventure", "Comedy", "Fantasy"],
    year: 2016,
    status: "completed",
    studio: "Studio Deen",
    description: "After dying a laughable death, Kazuma Satou is offered a chance to be reborn in a fantasy world with a goddess who is anything but divine."
  },
  {
    id: "32",
    name: "spice_and_wolf",
    displayName: "Spice and Wolf",
    image: { original: "https://cdn.myanimelist.net/images/anime/13/75127.jpg" }, // MAL ID: 2966
    kind: "TV",
    episodes: 13,
    episodes_aired: 13,
    score: "8.25",
    genre: ["Adventure", "Romance", "Fantasy"],
    year: 2008,
    status: "completed",
    studio: "Imagin",
    description: "A traveling merchant forms a partnership with a wolf deity who can take human form, as they journey together through a medieval world."
  },
  {
    id: "33",
    name: "fate_zero",
    displayName: "Fate/Zero",
    image: { original: "https://cdn.myanimelist.net/images/anime/2/73249.jpg" }, // MAL ID: 10087
    kind: "TV",
    episodes: 25,
    episodes_aired: 25,
    score: "8.40",
    genre: ["Action", "Fantasy", "Supernatural"],
    year: 2011,
    status: "completed",
    studio: "ufotable",
    description: "In a battle royale known as the Holy Grail War, seven mages and their heroic spirits fight to the death for the ultimate prize."
  },
  {
    id: "34",
    name: "fate_stay_night",
    displayName: "Fate/Stay Night",
    image: { original: "https://cdn.myanimelist.net/images/anime/13/11059.jpg" }, // MAL ID: 356
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "7.98",
    genre: ["Action", "Fantasy", "Supernatural"],
    year: 2006,
    status: "completed",
    studio: "Studio Deen",
    description: "A high school student is drawn into the Holy Grail War, where mages summon heroic spirits to fight for a miraculous wish-granting cup."
  },
  {
    id: "35",
    name: "code_geass",
    displayName: "Code Geass",
    image: { original: "https://cdn.myanimelist.net/images/anime/5/50331.jpg" }, // MAL ID: 1575
    kind: "TV",
    episodes: 25,
    episodes_aired: 25,
    score: "8.82",
    genre: ["Action", "Drama", "Mecha"],
    year: 2006,
    status: "completed",
    studio: "Sunrise",
    description: "In an alternate timeline where Britain has conquered Japan, a prince gains the power of Geass and leads a rebellion against the empire."
  },
  {
    id: "36",
    name: "psycho_pass",
    displayName: "Psycho-Pass",
    image: { original: "https://cdn.myanimelist.net/images/anime/11/43375.jpg" }, // MAL ID: 13601
    kind: "TV",
    episodes: 22,
    episodes_aired: 22,
    score: "8.36",
    genre: ["Action", "Sci-Fi", "Thriller"],
    year: 2012,
    status: "completed",
    studio: "Production I.G",
    description: "In a future where a person's criminal intent is measured by the Sibyl System, inspectors and enforcers work together to maintain order."
  },
  {
    id: "37",
    name: "ergo_proxy",
    displayName: "Ergo Proxy",
    image: { original: "https://cdn.myanimelist.net/images/anime/11/48443.jpg" }, // MAL ID: 790
    kind: "TV",
    episodes: 23,
    episodes_aired: 23,
    score: "8.10",
    genre: ["Mystery", "Psychological", "Sci-Fi"],
    year: 2006,
    status: "completed",
    studio: "Manglobe",
    description: "In a post-apocalyptic dome city, a female investigator and her android partner uncover a conspiracy involving beings called Proxies."
  },
  {
    id: "38",
    name: "ghost_in_the_shell",
    displayName: "Ghost in the Shell",
    image: { original: "https://cdn.myanimelist.net/images/anime/10/73240.jpg" }, // MAL ID: 43
    kind: "Movie",
    episodes: 1,
    episodes_aired: 1,
    score: "8.00",
    genre: ["Action", "Mecha", "Sci-Fi"],
    year: 1995,
    status: "completed",
    studio: "Production I.G",
    description: "In a cyberpunk future, a cyborg policewoman and her team track a mysterious hacker known as the Puppet Master."
  },
  {
    id: "39",
    name: "akira",
    displayName: "Akira",
    image: { original: "https://cdn.myanimelist.net/images/anime/10/73244.jpg" }, // MAL ID: 47
    kind: "Movie",
    episodes: 1,
    episodes_aired: 1,
    score: "8.08",
    genre: ["Action", "Drama", "Sci-Fi"],
    year: 1988,
    status: "completed",
    studio: "Tokyo Movie Shinsha",
    description: "In a post-apocalyptic Neo-Tokyo, a motorcycle gang member gains psychic abilities after a motorcycle accident, threatening to destroy the city."
  },
  {
    id: "40",
    name: "ninja_scroll",
    displayName: "Ninja Scroll",
    image: { original: "https://cdn.myanimelist.net/images/anime/6/20566.jpg" }, // MAL ID: 1176
    kind: "Movie",
    episodes: 1,
    episodes_aired: 1,
    score: "7.82",
    genre: ["Action", "Adventure", "Historical"],
    year: 1993,
    status: "completed",
    studio: "MADHOUSE",
    description: "A wandering ninja becomes involved in a battle against eight demonic warriors who threaten the Shogunate in feudal Japan."
  },
  {
    id: "41",
    name: "monster",
    displayName: "Monster",
    image: { original: "https://cdn.myanimelist.net/images/anime/10/18793.jpg" }, // MAL ID: 19
    kind: "TV",
    episodes: 74,
    episodes_aired: 74,
    score: "8.67",
    genre: ["Drama", "Mystery", "Psychological"],
    year: 2004,
    status: "completed",
    studio: "Madhouse",
    description: "A Japanese brain surgeon living in Germany saves the life of a young boy who grows up to become a serial killer, leading the doctor into a dark conspiracy."
  },
  {
    id: "42",
    name: "paranoia_agent",
    displayName: "Paranoia Agent",
    image: { original: "https://cdn.myanimelist.net/images/anime/1774/104523.jpg" }, // MAL ID: 323
    kind: "TV",
    episodes: 13,
    episodes_aired: 13,
    score: "7.85",
    genre: ["Mystery", "Psychological", "Thriller"],
    year: 2004,
    status: "completed",
    studio: "Madhouse",
    description: "A social phenomenon emerges in Musashino where people are attacked by a golden boy on roller skates, unraveling the psyche of the city."
  },
  {
    id: "43",
    name: "serial_experiments_lain",
    displayName: "Serial Experiments Lain",
    image: { original: "https://cdn.myanimelist.net/images/anime/1547/141076.jpg" }, // MAL ID: 339
    kind: "TV",
    episodes: 13,
    episodes_aired: 13,
    score: "8.02",
    genre: ["Drama", "Psychological", "Sci-Fi"],
    year: 1998,
    status: "completed",
    studio: "Triangle Staff",
    description: "A young girl receives an email from a classmate who committed suicide, drawing her into the Wired — a virtual world with god-like powers."
  },
  {
    id: "44",
    name: "texhnolyze",
    displayName: "Texhnolyze",
    image: { original: "https://cdn.myanimelist.net/images/anime/11/48293.jpg" }, // MAL ID: 1221
    kind: "TV",
    episodes: 22,
    episodes_aired: 22,
    score: "7.80",
    genre: ["Action", "Drama", "Sci-Fi"],
    year: 2003,
    status: "completed",
    studio: "Madhouse",
    description: "In the underground city of Lux, a young fighter receives cybernetic implants and becomes embroiled in a war between factions."
  },
  {
    id: "45",
    name: "haibane_renmei",
    displayName: "Haibane Renmei",
    image: { original: "https://cdn.myanimelist.net/images/anime/1531/139369.jpg" }, // MAL ID: 387
    kind: "TV",
    episodes: 13,
    episodes_aired: 13,
    score: "8.30",
    genre: ["Drama", "Fantasy", "Slice of Life"],
    year: 2002,
    status: "completed",
    studio: "Yoshitoshi ABe",
    description: "A girl reincarnates as a haibane, a being with wings, in a mysterious walled town where she must find her purpose and atone for her past sins."
  },
  {
    id: "46",
    name: "mushishi",
    displayName: "Mushishi",
    image: { original: "https://cdn.myanimelist.net/images/anime/2/73862.jpg" }, // MAL ID: 457
    kind: "TV",
    episodes: 26,
    episodes_aired: 26,
    score: "8.70",
    genre: ["Adventure", "Fantasy", "Slice of Life"],
    year: 2005,
    status: "completed",
    studio: "Artland",
    description: "Ginko, a mushishi, travels through rural Japan studying Mushi — primitive lifeforms that exist at the boundaries of reality and affect humans."
  },
  {
    id: "47",
    name: "natsumes_book_of_friends",
    displayName: "Natsume's Book of Friends",
    image: { original: "https://cdn.myanimelist.net/images/anime/1547/116900.jpg" }, // MAL ID: 4081
    kind: "TV",
    episodes: 13,
    episodes_aired: 13,
    score: "8.20",
    genre: ["Slice of Life", "Supernatural", "Drama"],
    year: 2008,
    status: "completed",
    studio: "Brain's Base",
    description: "A lonely teenager inherits a book containing the names of spirits bound to serve his grandmother, and decides to return their names."
  },
  {
    id: "48",
    name: "march_comes_in_like_a_lion",
    displayName: "March Comes in Like a Lion",
    image: { original: "https://cdn.myanimelist.net/images/anime/3/82337.jpg" }, // MAL ID: 31646
    kind: "TV",
    episodes: 22,
    episodes_aired: 22,
    score: "8.50",
    genre: ["Drama", "Slice of Life", "Psychological"],
    year: 2016,
    status: "completed",
    studio: "SHAFT",
    description: "A professional shogi player struggles with depression and loneliness while forming bonds with three sisters who help him find meaning in life."
  },
  {
    id: "49",
    name: "silver_spoon",
    displayName: "Silver Spoon",
    image: { original: "https://cdn.myanimelist.net/images/anime/13/50531.jpg" }, // MAL ID: 17517
    kind: "TV",
    episodes: 11,
    episodes_aired: 11,
    score: "8.15",
    genre: ["Slice of Life", "Comedy", "Drama"],
    year: 2013,
    status: "completed",
    studio: "A-1 Pictures",
    description: "A city boy enrolls in an agricultural school in rural Hokkaido, learning about farm life and finding his own path."
  },
  {
    id: "50",
    name: "the_ancient_magus_bride",
    displayName: "The Ancient Magus' Bride",
    image: { original: "https://cdn.myanimelist.net/images/anime/9/87742.jpg" }, // MAL ID: 35062
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "7.90",
    genre: ["Fantasy", "Romance", "Magic"],
    year: 2017,
    status: "completed",
    studio: "WIT Studio",
    description: "A lonely Japanese girl is sold at auction to a non-human magus who intends to make her his bride, leading to a magical journey."
  },
  {
    id: "51",
    name: "black_butler",
    displayName: "Black Butler",
    image: { original: "https://cdn.myanimelist.net/images/anime/13/20703.jpg" }, // MAL ID: 4898
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "7.85",
    genre: ["Comedy", "Fantasy", "Supernatural"],
    year: 2008,
    status: "completed",
    studio: "A-1 Pictures",
    description: "In Victorian England, a young earl makes a contract with a demon butler to help him take revenge on those who wronged his family."
  },
  {
    id: "52",
    name: "blue_exorcist",
    displayName: "Blue Exorcist",
    image: { original: "https://cdn.myanimelist.net/images/anime/10/75195.jpg" }, // MAL ID: 9919
    kind: "TV",
    episodes: 25,
    episodes_aired: 25,
    score: "7.70",
    genre: ["Action", "Fantasy", "Supernatural"],
    year: 2011,
    status: "completed",
    studio: "A-1 Pictures",
    description: "Rin Okumura discovers he is the son of Satan and decides to become an exorcist to defeat his father and prove his worth."
  },
  {
    id: "53",
    name: "the_seven_deadly_sins",
    displayName: "The Seven Deadly Sins",
    image: { original: "https://cdn.myanimelist.net/images/anime/11/65123.jpg" }, // MAL ID: 23755
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "7.95",
    genre: ["Action", "Adventure", "Fantasy"],
    year: 2014,
    status: "completed",
    studio: "A-1 Pictures",
    description: "A princess recruits a group of legendary knights known as the Seven Deadly Sins to help her take back her kingdom from corrupt holy knights."
  },
  {
    id: "54",
    name: "fairy_tail",
    displayName: "Fairy Tail",
    image: { original: "https://cdn.myanimelist.net/images/anime/5/18171.jpg" }, // MAL ID: 6702
    kind: "TV",
    episodes: 175,
    episodes_aired: 175,
    score: "7.70",
    genre: ["Action", "Adventure", "Fantasy"],
    year: 2009,
    status: "completed",
    studio: "A-1 Pictures",
    description: "Lucy Heartfilia joins the Fairy Tail guild and teams up with Natsu, a dragon slayer, for magical adventures with her new friends."
  },
  {
    id: "55",
    name: "rave_master",
    displayName: "Rave Master",
    image: { original: "https://cdn.myanimelist.net/images/anime/10/75044.jpg" }, // MAL ID: 598
    kind: "TV",
    episodes: 51,
    episodes_aired: 51,
    score: "7.50",
    genre: ["Action", "Adventure", "Fantasy"],
    year: 2001,
    status: "completed",
    studio: "Studio Deen",
    description: "A young man wields the power of the Rave stones to defeat the Dark Bring and bring peace to the world."
  },
  {
    id: "56",
    name: "edens_zero",
    displayName: "Edens Zero",
    image: { original: "https://cdn.myanimelist.net/images/anime/1004/112613.jpg" }, // MAL ID: 39942
    kind: "TV",
    episodes: 25,
    episodes_aired: 25,
    score: "7.60",
    genre: ["Action", "Adventure", "Sci-Fi"],
    year: 2021,
    status: "airing",
    studio: "J.C.Staff",
    description: "In a world where spaceships travel between planets, a boy who can control gravity embarks on a grand space adventure."
  },
  {
    id: "57",
    name: "the_promised_neverland",
    displayName: "The Promised Neverland",
    image: { original: "https://cdn.myanimelist.net/images/anime/1125/96929.jpg" }, // MAL ID: 37779
    kind: "TV",
    episodes: 12,
    episodes_aired: 12,
    score: "8.30",
    genre: ["Horror", "Mystery", "Thriller"],
    year: 2019,
    status: "completed",
    studio: "CloverWorks",
    description: "Children living in an orphanage discover the terrifying truth about their world and plot a daring escape to save themselves and their siblings."
  },
  {
    id: "58",
    name: "another",
    displayName: "Another",
    image: { original: "https://cdn.myanimelist.net/images/anime/4/75509.jpg" }, // MAL ID: 11111
    kind: "TV",
    episodes: 12,
    episodes_aired: 12,
    score: "7.75",
    genre: ["Horror", "Mystery", "Supernatural"],
    year: 2012,
    status: "completed",
    studio: "P.A.Works",
    description: "A transfer student joins a cursed class where students die one by one in mysterious accidents linked to a curse from the past."
  },
  {
    id: "59",
    name: "future_diary",
    displayName: "Future Diary",
    image: { original: "https://cdn.myanimelist.net/images/anime/13/33465.jpg" }, // MAL ID: 10620
    kind: "TV",
    episodes: 26,
    episodes_aired: 26,
    score: "7.85",
    genre: ["Action", "Mystery", "Thriller"],
    year: 2011,
    status: "completed",
    studio: "Asread",
    description: "A young man receives a diary that foretells the future, and becomes involved in a survival game among twelve diary holders."
  },
  {
    id: "60",
    name: "elfen_lied",
    displayName: "Elfen Lied",
    image: { original: "https://cdn.myanimelist.net/images/anime/1301/135061.jpg" }, // MAL ID: 226
    kind: "TV",
    episodes: 13,
    episodes_aired: 13,
    score: "7.80",
    genre: ["Action", "Drama", "Horror"],
    year: 2004,
    status: "completed",
    studio: "Arms",
    description: "A diclonius girl escapes from a research facility and is taken in by two college students, unleashing a story of tragedy and cruelty."
  },
  {
    id: "61",
    name: "higurashi",
    displayName: "Higurashi",
    image: { original: "https://cdn.myanimelist.net/images/anime/12/19634.jpg" }, // MAL ID: 934
    kind: "TV",
    episodes: 26,
    episodes_aired: 26,
    score: "8.07",
    genre: ["Mystery", "Psychological", "Thriller"],
    year: 2006,
    status: "completed",
    studio: "Studio Deen",
    description: "In a rural village, a series of mysterious deaths occur every year during the Watanagashi Festival, and newcomers uncover the dark truth."
  },
  {
    id: "62",
    name: "when_they_cry",
    displayName: "When They Cry",
    image: { original: "https://cdn.myanimelist.net/images/anime/12/11516.jpg" }, // MAL ID: 934 (same series)
    kind: "TV",
    episodes: 26,
    episodes_aired: 26,
    score: "8.10",
    genre: ["Mystery", "Psychological", "Supernatural"],
    year: 2006,
    status: "completed",
    studio: "Studio Deen",
    description: "In a secluded village, a series of brutal murders occur, and a boy must unravel the mystery behind the Hinamizawa syndrome."
  },
  {
    id: "63",
    name: "angel_beats",
    displayName: "Angel Beats!",
    image: { original: "https://cdn.myanimelist.net/images/anime/10/22061.jpg" }, // MAL ID: 6547
    kind: "TV",
    episodes: 13,
    episodes_aired: 13,
    score: "8.10",
    genre: ["Action", "Comedy", "Drama"],
    year: 2010,
    status: "completed",
    studio: "P.A.Works",
    description: "In the afterlife, a group of students rebel against a god-like girl while coming to terms with their past lives and regrets."
  },
  {
    id: "64",
    name: "charlotte",
    displayName: "Charlotte",
    image: { original: "https://cdn.myanimelist.net/images/anime/12/74163.jpg" }, // MAL ID: 28999
    kind: "TV",
    episodes: 13,
    episodes_aired: 13,
    score: "7.95",
    genre: ["Action", "Drama", "Supernatural"],
    year: 2015,
    status: "completed",
    studio: "P.A.Works",
    description: "In a world where certain teenagers develop supernatural abilities, a boy with the power to possess others must navigate a dangerous path."
  },
  {
    id: "65",
    name: "clannad",
    displayName: "Clannad",
    image: { original: "https://cdn.myanimelist.net/images/anime/1802/134440.jpg" }, // MAL ID: 2167
    kind: "TV",
    episodes: 23,
    episodes_aired: 23,
    score: "8.30",
    genre: ["Comedy", "Drama", "Romance"],
    year: 2007,
    status: "completed",
    studio: "Kyoto Animation",
    description: "A delinquent high school student meets a girl searching for a club to join, and their lives intertwine in a heartwarming story of family and growth."
  },
  {
    id: "66",
    name: "kanon",
    displayName: "Kanon",
    image: { original: "https://cdn.myanimelist.net/images/anime/5/6591.jpg" }, // MAL ID: 1530
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "7.85",
    genre: ["Drama", "Romance", "Slice of Life"],
    year: 2006,
    status: "completed",
    studio: "Kyoto Animation",
    description: "A young man returns to a town he visited years ago, reuniting with girls whose lives he touched, and discovering mysterious connections."
  },
  {
    id: "67",
    name: "toradora",
    displayName: "Toradora!",
    image: { original: "https://cdn.myanimelist.net/images/anime/13/22128.jpg" }, // MAL ID: 4224
    kind: "TV",
    episodes: 25,
    episodes_aired: 25,
    score: "8.20",
    genre: ["Comedy", "Romance", "Slice of Life"],
    year: 2008,
    status: "completed",
    studio: "J.C.Staff",
    description: "A fierce-looking boy and a short-tempered girl form an unlikely alliance to help each other win the hearts of their respective crushes."
  },
  {
    id: "68",
    name: "my_little_monster",
    displayName: "My Little Monster",
    image: { original: "https://cdn.myanimelist.net/images/anime/10/41437.jpg" }, // MAL ID: 14713
    kind: "TV",
    episodes: 13,
    episodes_aired: 13,
    score: "7.65",
    genre: ["Comedy", "Romance", "School"],
    year: 2012,
    status: "completed",
    studio: "Brain's Base",
    description: "A studious girl and a troublemaking boy form an unlikely friendship that blossoms into romance in this high school story."
  },
  {
    id: "69",
    name: "golden_time",
    displayName: "Golden Time",
    image: { original: "https://cdn.myanimelist.net/images/anime/12/53583.jpg" }, // MAL ID: 18897
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "8.00",
    genre: ["Comedy", "Drama", "Romance"],
    year: 2013,
    status: "completed",
    studio: "J.C.Staff",
    description: "A law student with amnesia navigates college life and romance, discovering that his past still haunts him in unexpected ways."
  },
  {
    id: "70",
    name: "chunibyo",
    displayName: "Love, Chunibyo & Other Delusions",
    image: { original: "https://cdn.myanimelist.net/images/anime/12/42773.jpg" }, // MAL ID: 14741
    kind: "TV",
    episodes: 12,
    episodes_aired: 12,
    score: "7.90",
    genre: ["Comedy", "Drama", "Romance"],
    year: 2012,
    status: "completed",
    studio: "Kyoto Animation",
    description: "A boy who wants to leave his chuunibyou past behind meets a girl who still suffers from the delusion that she has magical powers."
  },
  {
    id: "71",
    name: "haruhi_suzumiya",
    displayName: "The Melancholy of Haruhi Suzumiya",
    image: { original: "https://cdn.myanimelist.net/images/anime/13/11384.jpg" }, // MAL ID: 904
    kind: "TV",
    episodes: 14,
    episodes_aired: 14,
    score: "8.15",
    genre: ["Comedy", "Mystery", "Sci-Fi"],
    year: 2006,
    status: "completed",
    studio: "Kyoto Animation",
    description: "A high school boy is recruited into a club run by a girl who unknowingly has the power to reshape reality, leading to bizarre adventures."
  },
  {
    id: "72",
    name: "lucky_star",
    displayName: "Lucky Star",
    image: { original: "https://cdn.myanimelist.net/images/anime/10/18881.jpg" }, // MAL ID: 1887
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "7.85",
    genre: ["Comedy", "Slice of Life"],
    year: 2007,
    status: "completed",
    studio: "Kyoto Animation",
    description: "A slice-of-life comedy following four high school girls as they navigate everyday life, from eating chocolate cornet to preparing for exams."
  },
  {
    id: "73",
    name: "k_on",
    displayName: "K-On!",
    image: { original: "https://cdn.myanimelist.net/images/anime/10/16281.jpg" }, // MAL ID: 5680
    kind: "TV",
    episodes: 13,
    episodes_aired: 13,
    score: "8.00",
    genre: ["Comedy", "Music", "Slice of Life"],
    year: 2009,
    status: "completed",
    studio: "Kyoto Animation",
    description: "Four high school girls join a light music club to save it from being disbanded, learning to play instruments and forming lasting friendships."
  },
  {
    id: "74",
    name: "a_silent_voice",
    displayName: "A Silent Voice",
    image: { original: "https://cdn.myanimelist.net/images/anime/1122/94442.jpg" }, // MAL ID: 33352
    kind: "Movie",
    episodes: 1,
    episodes_aired: 1,
    score: "8.65",
    genre: ["Drama", "Romance", "School"],
    year: 2016,
    status: "completed",
    studio: "Kyoto Animation",
    description: "A former bully reunites with the deaf girl he tormented in elementary school, seeking redemption and friendship in this emotional story."
  },
  {
    id: "75",
    name: "your_lie_in_april",
    displayName: "Your Lie in April",
    image: { original: "https://cdn.myanimelist.net/images/anime/3/67177.jpg" }, // MAL ID: 23273
    kind: "TV",
    episodes: 22,
    episodes_aired: 22,
    score: "8.68",
    genre: ["Drama", "Music", "Romance"],
    year: 2014,
    status: "completed",
    studio: "A-1 Pictures",
    description: "A piano prodigy who lost his ability to play after his mother's death meets a violinist who helps him rediscover his love for music."
  },
  {
    id: "76",
    name: "anohana",
    displayName: "Anohana",
    image: { original: "https://cdn.myanimelist.net/images/anime/5/30165.jpg" }, // MAL ID: 9989
    kind: "TV",
    episodes: 11,
    episodes_aired: 11,
    score: "8.40",
    genre: ["Drama", "Slice of Life", "Supernatural"],
    year: 2011,
    status: "completed",
    studio: "A-1 Pictures",
    description: "A group of childhood friends grow apart after the death of one of them, until her ghost appears to one of them, asking for a wish to be fulfilled."
  },
  {
    id: "77",
    name: "violet_evergarden",
    displayName: "Violet Evergarden",
    image: { original: "https://cdn.myanimelist.net/images/anime/1795/95088.jpg" }, // MAL ID: 33352
    kind: "TV",
    episodes: 13,
    episodes_aired: 13,
    score: "8.50",
    genre: ["Drama", "Sci-Fi", "Slice of Life"],
    year: 2018,
    status: "completed",
    studio: "Kyoto Animation",
    description: "A former soldier turned Auto Memory Doll helps people express their feelings through writing letters, while seeking the meaning of 'I love you'."
  },
  {
    id: "78",
    name: "made_in_abyss",
    displayName: "Made in Abyss",
    image: { original: "https://cdn.myanimelist.net/images/anime/11/87428.jpg" }, // MAL ID: 34599
    kind: "TV",
    episodes: 13,
    episodes_aired: 13,
    score: "8.70",
    genre: ["Adventure", "Drama", "Fantasy"],
    year: 2017,
    status: "completed",
    studio: "Kinema Citrus",
    description: "A young girl and a robot descend into the Abyss, a massive hole filled with wonders and horrors, searching for her mother."
  },
  {
    id: "79",
    name: "the_garden_of_words",
    displayName: "The Garden of Words",
    image: { original: "https://cdn.myanimelist.net/images/anime/5/50175.jpg" }, // MAL ID: 16782
    kind: "Movie",
    episodes: 1,
    episodes_aired: 1,
    score: "8.30",
    genre: ["Drama", "Romance"],
    year: 2013,
    status: "completed",
    studio: "CoMix Wave Films",
    description: "A 15-year-old boy and a 27-year-old woman meet by chance in a garden on rainy mornings, forming a bond that transcends age and circumstance."
  },
  {
    id: "80",
    name: "children_of_the_sea",
    displayName: "Children of the Sea",
    image: { original: "https://cdn.myanimelist.net/images/anime/1020/100411.jpg" }, // MAL ID: 39456
    kind: "Movie",
    episodes: 1,
    episodes_aired: 1,
    score: "8.20",
    genre: ["Adventure", "Drama", "Mystery"],
    year: 2019,
    status: "completed",
    studio: "Studio 4°C",
    description: "A girl experiencing a spiritual disconnect from her family meets two mysterious boys raised by dugongs, leading to an oceanic adventure."
  },
  {
    id: "81",
    name: "bunny_drop",
    displayName: "Bunny Drop",
    image: { original: "https://cdn.myanimelist.net/images/anime/2/29665.jpg" }, // MAL ID: 10162
    kind: "TV",
    episodes: 11,
    episodes_aired: 11,
    score: "8.10",
    genre: ["Slice of Life", "Drama"],
    year: 2011,
    status: "completed",
    studio: "Production I.G",
    description: "A 30-year-old bachelor discovers he has a six-year-old daughter after his grandfather's death, and decides to raise her himself."
  },
  {
    id: "82",
    name: "usagi_drop",
    displayName: "Usagi Drop",
    image: { original: "https://cdn.myanimelist.net/images/anime/2/29665.jpg" }, // MAL ID: 10162
    kind: "TV",
    episodes: 11,
    episodes_aired: 11,
    score: "8.10",
    genre: ["Slice of Life", "Drama"],
    year: 2011,
    status: "completed",
    studio: "Production I.G",
    description: "A 30-year-old bachelor discovers he has a six-year-old daughter after his grandfather's death, and decides to raise her himself."
  },
  {
    id: "83",
    name: "fruits_basket",
    displayName: "Fruits Basket",
    image: { original: "https://cdn.myanimelist.net/images/anime/1447/99827.jpg" }, // MAL ID: 38680
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "8.20",
    genre: ["Comedy", "Drama", "Romance"],
    year: 2019,
    status: "completed",
    studio: "TMS Entertainment",
    description: "An orphaned high school girl is taken in by the mysterious Sohma family, who are possessed by the spirits of the Chinese zodiac."
  },
  {
    id: "84",
    name: "ouran_high_school_host_club",
    displayName: "Ouran High School Host Club",
    image: { original: "https://cdn.myanimelist.net/images/anime/2/71992.jpg" }, // MAL ID: 2076
    kind: "TV",
    episodes: 26,
    episodes_aired: 26,
    score: "8.10",
    genre: ["Comedy", "Romance", "School"],
    year: 2006,
    status: "completed",
    studio: "Bones",
    description: "A poor scholarship student at an elite school accidentally breaks an expensive vase and must work at the host club to repay the debt."
  },
  {
    id: "85",
    name: "sakurasou_no_pet_na_kanojo",
    displayName: "The Pet Girl of Sakurasou",
    image: { original: "https://cdn.myanimelist.net/images/anime/13/41343.jpg" }, // MAL ID: 13759
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "8.20",
    genre: ["Comedy", "Drama", "Romance"],
    year: 2012,
    status: "completed",
    studio: "J.C.Staff",
    description: "A high school boy living in a dorm for troubled students meets a genius artist girl and helps her navigate the challenges of talent and expectations."
  },
  {
    id: "86",
    name: "shigatsu_wa_kimi_no_uso",
    displayName: "Shigatsu wa Kimi no Uso",
    image: { original: "https://cdn.myanimelist.net/images/anime/3/67177.jpg" }, // MAL ID: 23273
    kind: "TV",
    episodes: 22,
    episodes_aired: 22,
    score: "8.68",
    genre: ["Drama", "Music", "Romance"],
    year: 2014,
    status: "completed",
    studio: "A-1 Pictures",
    description: "A piano prodigy who lost his ability to play after his mother's death meets a violinist who helps him rediscover his love for music."
  },
  {
    id: "87",
    name: "relife",
    displayName: "ReLife",
    image: { original: "https://cdn.myanimelist.net/images/anime/3/80145.jpg" }, // MAL ID: 31953
    kind: "TV",
    episodes: 13,
    episodes_aired: 13,
    score: "7.95",
    genre: ["Comedy", "Drama", "Romance"],
    year: 2016,
    status: "completed",
    studio: "TMS Entertainment",
    description: "An unemployed man is offered a chance to relive his high school years through an experimental program, giving him a new perspective on life."
  },
  {
    id: "88",
    name: "erased",
    displayName: "Erased",
    image: { original: "https://cdn.myanimelist.net/images/anime/10/77957.jpg" }, // MAL ID: 31043
    kind: "TV",
    episodes: 12,
    episodes_aired: 12,
    score: "8.40",
    genre: ["Mystery", "Psychological", "Thriller"],
    year: 2016,
    status: "completed",
    studio: "A-1 Pictures",
    description: "A man with the ability to leap back in time attempts to prevent a kidnapping that occurred when he was a child, saving a classmate's life."
  },
  {
    id: "89",
    name: "86",
    displayName: "86",
    image: { original: "https://cdn.myanimelist.net/images/anime/1987/117507.jpg" }, // MAL ID: 41457
    kind: "TV",
    episodes: 11,
    episodes_aired: 11,
    score: "8.50",
    genre: ["Action", "Drama", "Sci-Fi"],
    year: 2021,
    status: "completed",
    studio: "A-1 Pictures",
    description: "In a war between nations, elite pilots known as 86 fight on the front lines while being discriminated against by their own country."
  },
  {
    id: "90",
    name: "the_irregular_at_magic_high_school",
    displayName: "The Irregular at Magic High School",
    image: { original: "https://cdn.myanimelist.net/images/anime/11/53413.jpg" }, // MAL ID: 20785
    kind: "TV",
    episodes: 26,
    episodes_aired: 26,
    score: "7.70",
    genre: ["Action", "Fantasy", "Sci-Fi"],
    year: 2014,
    status: "completed",
    studio: "Madhouse",
    description: "In a world where magic is a technology, a brother and sister enroll in a prestigious magic high school, but the brother is deemed incompetent."
  },
  {
    id: "91",
    name: "the_misfit_of_demon_king_academy",
    displayName: "The Misfit of Demon King Academy",
    image: { original: "https://cdn.myanimelist.net/images/anime/1155/107567.jpg" }, // MAL ID: 40748
    kind: "TV",
    episodes: 13,
    episodes_aired: 13,
    score: "7.80",
    genre: ["Action", "Fantasy", "School"],
    year: 2020,
    status: "completed",
    studio: "Silver Link",
    description: "The Demon King reincarnates after 2000 years and enrolls in his academy, but is deemed a misfit due to his overwhelming power."
  },
  {
    id: "92",
    name: "that_time_i_got_reincarnated_as_a_slime",
    displayName: "That Time I Got Reincarnated as a Slime",
    image: { original: "https://cdn.myanimelist.net/images/anime/1557/106476.jpg" }, // MAL ID: 37430
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "8.20",
    genre: ["Action", "Adventure", "Fantasy"],
    year: 2018,
    status: "airing",
    studio: "Eight Bit",
    description: "A salaryman is reincarnated as a slime in another world with unique abilities, and sets out to build a nation where all races can coexist."
  },
  {
    id: "93",
    name: "so_im_a_spider_so_what",
    displayName: "So I'm a Spider, So What?",
    image: { original: "https://cdn.myanimelist.net/images/anime/1183/107693.jpg" }, // MAL ID: 37993
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "7.70",
    genre: ["Action", "Adventure", "Comedy"],
    year: 2021,
    status: "completed",
    studio: "Millelce",
    description: "A high school girl is reincarnated as a spider monster in a dungeon, and must use her wits and skills to survive and evolve."
  },
  {
    id: "94",
    name: "kuma_kuma_kuma_bear",
    displayName: "Kuma Kuma Kuma Bear",
    image: { original: "https://cdn.myanimelist.net/images/anime/1043/107647.jpg" }, // MAL ID: 40195
    kind: "TV",
    episodes: 12,
    episodes_aired: 12,
    score: "7.50",
    genre: ["Adventure", "Comedy", "Fantasy"],
    year: 2020,
    status: "completed",
    studio: "EMT Squared",
    description: "A girl obsessed with bears is transported to a fantasy world and receives bear-themed equipment, using her overpowered abilities to help others."
  },
  {
    id: "95",
    name: "didnt_i_say_to_make_my_abilities_average_in_the_next_life",
    displayName: "Didn't I Say to Make My Abilities Average in the Next Life?",
    image: { original: "https://cdn.myanimelist.net/images/anime/1628/102553.jpg" }, // MAL ID: 38844
    kind: "TV",
    episodes: 12,
    episodes_aired: 12,
    score: "7.40",
    genre: ["Adventure", "Comedy", "Fantasy"],
    year: 2019,
    status: "completed",
    studio: "Project No.9",
    description: "A woman reincarnates into a fantasy world with average abilities, but her 'average' is still far beyond normal, leading to comedic adventures."
  },
  {
    id: "96",
    name: "the_devil_is_a_part_timer_2",
    displayName: "The Devil is a Part-Timer (S2)",
    image: { original: "https://cdn.myanimelist.net/images/anime/10/50643.jpg" }, // MAL ID: 15809
    kind: "TV",
    episodes: 13,
    episodes_aired: 13,
    score: "7.90",
    genre: ["Comedy", "Fantasy", "Supernatural"],
    year: 2013,
    status: "completed",
    studio: "White Fox",
    description: "The Demon Lord Satan is transported to modern-day Tokyo and must work at a fast-food restaurant to survive while plotting his return."
  },
  {
    id: "97",
    name: "the_ancient_magus_bride_2",
    displayName: "The Ancient Magus' Bride (S2)",
    image: { original: "https://cdn.myanimelist.net/images/anime/9/87742.jpg" }, // MAL ID: 35062
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "7.90",
    genre: ["Fantasy", "Romance", "Magic"],
    year: 2017,
    status: "completed",
    studio: "WIT Studio",
    description: "A lonely Japanese girl is sold at auction to a non-human magus who intends to make her his bride, leading to a magical journey."
  },
  {
    id: "98",
    name: "the_promised_neverland_2",
    displayName: "The Promised Neverland (S2)",
    image: { original: "https://cdn.myanimelist.net/images/anime/1125/96929.jpg" }, // MAL ID: 37779
    kind: "TV",
    episodes: 12,
    episodes_aired: 12,
    score: "8.30",
    genre: ["Horror", "Mystery", "Thriller"],
    year: 2019,
    status: "completed",
    studio: "CloverWorks",
    description: "Children living in an orphanage discover the terrifying truth about their world and plot a daring escape to save themselves and their siblings."
  },
  {
    id: "99",
    name: "violet_evergarden_2",
    displayName: "Violet Evergarden (Rewatch)",
    image: { original: "https://cdn.myanimelist.net/images/anime/1795/95088.jpg" }, // MAL ID: 33352
    kind: "TV",
    episodes: 13,
    episodes_aired: 13,
    score: "8.50",
    genre: ["Drama", "Sci-Fi", "Slice of Life"],
    year: 2018,
    status: "completed",
    studio: "Kyoto Animation",
    description: "A former soldier turned Auto Memory Doll helps people express their feelings through writing letters, while seeking the meaning of 'I love you'."
  },
  {
    id: "100",
    name: "made_in_abyss_2",
    displayName: "Made in Abyss (Rewatch)",
    image: { original: "https://cdn.myanimelist.net/images/anime/11/87428.jpg" }, // MAL ID: 34599
    kind: "TV",
    episodes: 13,
    episodes_aired: 13,
    score: "8.70",
    genre: ["Adventure", "Drama", "Fantasy"],
    year: 2017,
    status: "completed",
    studio: "Kinema Citrus",
    description: "A young girl and a robot descend into the Abyss, a massive hole filled with wonders and horrors, searching for her mother."
  }
];

const PAGE_SIZE = 6;

export async function getAnimeList(
  cursor: number = 0,
  filters: Partial<FilterState> = {}
): Promise<PaginatedResponse> {
  await new Promise((r) => setTimeout(r, 600));

  let filtered = [...ANIME_DATABASE];

  if (filters.search) {
    const q = filters.search.toLowerCase();
    filtered = filtered.filter(
      (a) =>
        a.displayName.toLowerCase().includes(q) ||
        a.genre.some((g) => g.toLowerCase().includes(q)) ||
        a.studio.toLowerCase().includes(q)
    );
  }

  if (filters.genre && filters.genre !== "all") {
    filtered = filtered.filter((a) =>
      a.genre.some((g) => g.toLowerCase() === filters.genre?.toLowerCase())
    );
  }

  if (filters.minScore && filters.minScore > 0) {
    filtered = filtered.filter(
      (a) => parseFloat(a.score) >= (filters.minScore ?? 0)
    );
  }

  switch (filters.sort) {
    case "name":
      filtered.sort((a, b) => a.displayName.localeCompare(b.displayName));
      break;
    case "episodes":
      filtered.sort((a, b) => b.episodes - a.episodes);
      break;
    case "year":
      filtered.sort((a, b) => b.year - a.year);
      break;
    default:
      filtered.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
  }

  const total = filtered.length;
  const paginated = filtered.slice(cursor, cursor + PAGE_SIZE);
  const nextCursor = cursor + PAGE_SIZE < total ? cursor + PAGE_SIZE : null;

  return {
    data: paginated,
    nextCursor,
    total,
    hasMore: nextCursor !== null,
  };
}

export function getAllGenres(): string[] {
  const genres = new Set<string>();
  ANIME_DATABASE.forEach((a) => a.genre.forEach((g) => genres.add(g)));
  return ["all", ...Array.from(genres).sort()];
}