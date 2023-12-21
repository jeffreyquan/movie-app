import movieApi from "api/movie-api";
import { Endpoints } from "constants/endpoints";

export async function getSearchResults(query: string) {
  return await movieApi.get(Endpoints.SEARCH, {
    params: {
      query,
    },
  });
}
