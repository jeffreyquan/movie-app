import axios from "axios";

function getApiUrl() {
  const apiUrl = process.env.REACT_APP_API_URL;

  if (apiUrl === undefined) {
    throw new Error(
      "Check REACT_APP_API_URL environment variable has been provided",
    );
  }

  return apiUrl;
}

const movieApi = axios.create({
  baseURL: getApiUrl(),
});

export default movieApi;
