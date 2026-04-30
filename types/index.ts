export interface Anime {
  id: string;
  name: string;
  displayName: string;
  image: {
    original: string;
    thumbnail?: string;
  };
  kind: "TV" | "Movie" | "OVA" | "ONA" | "Special";
  episodes: number;
  episodes_aired: number;
  score: string;
  genre: string[];
  year: number;
  status: "completed" | "airing" | "upcoming";
  description: string;
  studio: string;
}

export interface PaginatedResponse {
  data: Anime[];
  nextCursor: number | null;
  total: number;
  hasMore: boolean;
}

export interface FilterState {
  search: string;
  sort: "score" | "name" | "episodes" | "year";
  genre: string;
  minScore: number;
}