import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000,
  params: {
    api_key: process.env.REACT_APP_MOVIE_API_KEY,
  },
});
