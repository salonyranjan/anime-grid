import { Anime, PaginatedResponse, FilterState } from "@/types";

export const ANIME_DATABASE: Anime[] = [
  {
    id: "1",
    name: "bleach",
    displayName: "Bleach",
    image: {
      original:
        "https://cdn.myanimelist.net/images/anime/3/40451.jpg",
    },
    kind: "TV",
    episodes: 366,
    episodes_aired: 366,
    score: "7.92",
    genre: ["Action", "Adventure", "Supernatural"],
    year: 2004,
    status: "completed",
    studio: "Pierrot",
    description:
      "Ichigo Kurosaki is an ordinary high schooler until his family is attacked by a Hollow, a corrupt spirit seeking to devour human souls. A Soul Reaper named Rukia sacrifices her powers to save them, and Ichigo must take on her role as a Soul Reaper.",
  },
  {
    id: "2",
    name: "black_clover",
    displayName: "Black Clover",
    image: {
      original:
        "https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
    },
    kind: "TV",
    episodes: 170,
    episodes_aired: 170,
    score: "7.16",
    genre: ["Action", "Fantasy", "Magic"],
    year: 2017,
    status: "completed",
    studio: "Pierrot",
    description:
      "Asta and Yuno were abandoned at the same church and have been inseparable since. Asta dreams of becoming the Wizard King despite having no magical power, while Yuno is a prodigy. Together they will challenge fate itself.",
  },
  {
    id: "3",
    name: "dragon_ball",
    displayName: "Dragon Ball Z",
    image: {
      original:
        "https://cdn.myanimelist.net/images/anime/6/20936.jpg",
    },
    kind: "TV",
    episodes: 153,
    episodes_aired: 153,
    score: "8.68",
    genre: ["Action", "Adventure", "Martial Arts"],
    year: 1989,
    status: "completed",
    studio: "Toei Animation",
    description:
      "After learning that he is from another planet, a warrior named Goku and his friends are prompted to defend it from an onslaught of extraterrestrial enemies. The saga that changed anime forever.",
  },
  {
    id: "4",
    name: "jujutsu_kaisen",
    displayName: "Jujutsu Kaisen",
    image: {
      original:
        "https://static.wikia.nocookie.net/jujutsu-kaisen/images/8/88/Anime_Key_Visual_2.png/revision/latest?cb=20201212034001",
    },
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "8.78",
    genre: ["Action", "Horror", "Supernatural"],
    year: 2020,
    status: "airing",
    studio: "MAPPA",
    description:
      "Yuji Itadori is a high school student who swallows a cursed object and finds himself drawn into the world of Jujutsu Sorcerers, who battle cursed spirits threatening humanity.",
  },
  {
    id: "5",
    name: "fma_brotherhood",
    displayName: "Fullmetal Alchemist: Brotherhood",
    image: {
      original:
        "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
    },
    kind: "TV",
    episodes: 64,
    episodes_aired: 64,
    score: "9.24",
    genre: ["Action", "Adventure", "Drama"],
    year: 2009,
    status: "completed",
    studio: "Bones",
    description:
      "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes wrong, leaving them in damaged physical forms. A masterpiece of storytelling and world-building.",
  },
  {
    id: "6",
    name: "naruto",
    displayName: "Naruto",
    image: {
      original:
        "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    },
    kind: "TV",
    episodes: 220,
    episodes_aired: 220,
    score: "8.30",
    genre: ["Action", "Adventure", "Ninja"],
    year: 2002,
    status: "completed",
    studio: "Pierrot",
    description:
      "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.",
  },
  {
    id: "7",
    name: "gintama",
    displayName: "Gintama",
    image: {
      original:
        "https://m.media-amazon.com/images/M/MV5BMDkxZTJjZTEtMDRjMy00Yzk1LWI5YjItMjIwYmVlYzhlZWZhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_FMjpg_UX1000_.jpg",
    },
    kind: "TV",
    episodes: 367,
    episodes_aired: 367,
    score: "9.00",
    genre: ["Action", "Comedy", "Sci-Fi"],
    year: 2006,
    status: "completed",
    studio: "Sunrise",
    description:
      "After aliens invaded and conquered feudal Japan, a broke samurai finds work however he can, all the while searching for a reason to keep his sword. Brilliantly blends comedy with serious story arcs.",
  },
  {
    id: "9",
    name: "one_piece",
    displayName: "One Piece",
    image: {
      original:
        "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    },
    kind: "TV",
    episodes: 1030,
    episodes_aired: 1030,
    score: "8.58",
    genre: ["Action", "Adventure", "Fantasy"],
    year: 1999,
    status: "airing",
    studio: "Toei Animation",
    description:
      "Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever left by the legendary Pirate, Gold Roger. The greatest adventure in anime history.",
  },
  {
    id: "10",
    name: "demon_slayer",
    displayName: "Demon Slayer",
    image: {
      original:
        "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
    },
    kind: "TV",
    episodes: 26,
    episodes_aired: 26,
    score: "8.60",
    genre: ["Action", "Historical", "Supernatural"],
    year: 2019,
    status: "airing",
    studio: "ufotable",
    description:
      "A family is attacked by demons and only two members survive — Tanjiro and his sister Nezuko, who is turning into a demon. Tanjiro sets out to become a demon slayer to avenge his family.",
  },
  {
    id: "11",
    name: "attack_on_titan",
    displayName: "Attack on Titan",
    image: { original: "https://flxt.tmsimg.com/assets/p10701949_b_v8_ah.jpg" },
    kind: "TV",
    episodes: 75,
    episodes_aired: 75,
    score: "9.16",
    genre: ["Action", "Drama", "Mystery"],
    year: 2013,
    status: "completed",
    studio: "WIT Studio / MAPPA",
    description:
      "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
  },
  {
    id: "12",
    name: "hunter_x_hunter",
    displayName: "Hunter x Hunter",
    image: {
      original:
        "https://m.media-amazon.com/images/M/MV5BZjNmZDhkN2QtNDYyZC00YzJmLTg0ODUtN2FjNjhhMzE3ZmUxXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg",
    },
    kind: "TV",
    episodes: 148,
    episodes_aired: 148,
    score: "9.10",
    genre: ["Action", "Adventure", "Fantasy"],
    year: 2011,
    status: "completed",
    studio: "Madhouse",
    description:
      "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks his missing father who is a Hunter himself.",
  },
  {
    id: "13",
    name: "boku_no_hero_academia",
    displayName: "My Hero Academia",
    image: {
      original:
        "https://i.pinimg.com/736x/0f/7f/ee/0f7feeb4655ffc029d1b9823bafb2ff8.jpg",
    },
    kind: "TV",
    episodes: 114,
    episodes_aired: 114,
    score: "8.39",
    genre: ["Action", "Superhero", "School"],
    year: 2016,
    status: "airing",
    studio: "Bones",
    description:
      "In a world where most of the population possesses superpowers called Quirks, Izuku Midoriya is born without one. After a fateful meeting with the greatest hero, he inherits power and enrols in a prestigious hero academy.",
  },
  {
    id: "14",
    name: "death_note",
    displayName: "Death Note",
    image: {
      original:
        "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
    },
    kind: "TV",
    episodes: 37,
    episodes_aired: 37,
    score: "9.00",
    genre: ["Thriller", "Psychological", "Supernatural"],
    year: 2006,
    status: "completed",
    studio: "Madhouse",
    description:
      "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
  },
  {
    id: "15",
    name: "steins_gate",
    displayName: "Steins;Gate",
    image: {
      original:
        "https://cdn.myanimelist.net/images/anime/1935/127974.jpg",
    },
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "9.08",
    genre: ["Sci-Fi", "Thriller", "Drama"],
    year: 2011,
    status: "completed",
    studio: "White Fox",
    description:
      "A group of friends accidentally invent a time machine, leading to consequences that spiral beyond their control. One of the most acclaimed psychological thrillers in anime history.",
  },
  {
    id: "16",
    name: "vinland_saga",
    displayName: "Vinland Saga",
    image: {
      original:
        "https://cdn.myanimelist.net/images/anime/1500/103005.jpg",
    },
    kind: "TV",
    episodes: 24,
    episodes_aired: 24,
    score: "8.72",
    genre: ["Action", "Historical", "Drama"],
    year: 2019,
    status: "airing",
    studio: "WIT Studio",
    description:
      "Thorfinn pursues a journey with his father's killer in order to take revenge and fulfill his dream to go to Vinland. A brutal, beautiful epic set in Viking Age Europe.",
  },
];

const PAGE_SIZE = 6;

export async function getAnimeList(
  cursor: number = 0,
  filters: Partial<FilterState> = {}
): Promise<PaginatedResponse> {
  // Simulate server latency
  await new Promise((r) => setTimeout(r, 600));

  let filtered = [...ANIME_DATABASE];

  // Apply search filter
  if (filters.search) {
    const q = filters.search.toLowerCase();
    filtered = filtered.filter(
      (a) =>
        a.displayName.toLowerCase().includes(q) ||
        a.genre.some((g) => g.toLowerCase().includes(q)) ||
        a.studio.toLowerCase().includes(q)
    );
  }

  // Apply genre filter
  if (filters.genre && filters.genre !== "all") {
    filtered = filtered.filter((a) =>
      a.genre.some((g) => g.toLowerCase() === filters.genre?.toLowerCase())
    );
  }

  // Apply min score filter
  if (filters.minScore && filters.minScore > 0) {
    filtered = filtered.filter(
      (a) => parseFloat(a.score) >= (filters.minScore ?? 0)
    );
  }

  // Apply sort
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
  const nextCursor =
    cursor + PAGE_SIZE < total ? cursor + PAGE_SIZE : null;

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