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
    return await axiosInstance.get("/genre/movie/list?language=es-ES");
  } catch (error) {
    console.error(error);
  }
};
export const getTopRatedMovies = async () => {
  try {
    return await axiosInstance.get("/movie/top_rated");
  } catch (error) {
    console.error(error);
  }
};
export const getMovieDetails = async (id: number) => {
  try {
    return await axiosInstance.get(`/movie/${id}`);
  } catch (error) {
    console.error(error);
  }
};
