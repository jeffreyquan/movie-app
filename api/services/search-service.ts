import axios from "axios";
import { ENDPOINTS } from "../endpoints";

export async function search(query: string) {
  const res = await axios.get(ENDPOINTS.search, {
    params: {
      query,
    },
  });
  return res.data;
}
