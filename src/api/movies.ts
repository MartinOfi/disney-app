import { axiosInstance } from "./axios";

export const getPopularMovies = async () => {
  try {
    return await axiosInstance.get("/movie/popular");
  } catch (error) {
    console.error(error);
  }
};

export const getGenresMovies = async () => {
  try {
    return await axiosInstance.get("/genre/movie/list");
  } catch (error) {
    console.error(error);
  }
};
