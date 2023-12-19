const API_URL = "http://localhost:3001/api";

const getEndpoint = (endpoint: string) => `${API_URL}/${endpoint}`;

export const ENDPOINTS = {
  search: getEndpoint("search"),
};
