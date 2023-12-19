import axios from "axios";
import { ENDPOINTS } from "constants/endpoints";

export async function getSearchResults(query: string) {
  return await axios.get(ENDPOINTS.search, {
    params: {
      query,
    },
  });
}
