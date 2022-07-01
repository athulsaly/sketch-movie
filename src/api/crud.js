//
import axios from "axios";

var api_id = "8c5825603819c6565d47f38f78f6d76d";

const axiosInstance = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=${api_id}&language=en-US`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

// GET ALL Popular
const getAllPopular = async (padgeNum) => {
  let data = [];
  let fetch_api_url = `&page=${padgeNum}`;

  let response = await axiosInstance.get(fetch_api_url);
  if (response) {
    data = response.data;
    return data;
  }
  return data;
};

export { getAllPopular };
