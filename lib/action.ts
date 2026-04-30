"use server";

import { getAnimeList } from "@/lib/data";
import { FilterState, PaginatedResponse } from "@/types";

export async function fetchAnimeAction(
  cursor: number,
  filters: Partial<FilterState>
): Promise<PaginatedResponse> {
  try {
    const result = await getAnimeList(cursor, filters);
    return result;
  } catch (error) {
    console.error("Server action error:", error);
    throw new Error("Failed to fetch anime data");
  }
}

export async function searchAnimeAction(
  query: string,
  filters: Partial<FilterState>
): Promise<PaginatedResponse> {
  try {
    const result = await getAnimeList(0, { ...filters, search: query });
    return result;
  } catch (error) {
    console.error("Search action error:", error);
    throw new Error("Failed to search anime");
  }
}