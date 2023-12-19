import { TMDB_API_URL, TMDB_API_KEY } from "./config";

const getEndpoint = (endpoint: string) =>
  `${TMDB_API_URL}/${endpoint}?api_key=${TMDB_API_KEY}`;

export const ENDPOINTS = {
  search: getEndpoint("search/movie"),
};
