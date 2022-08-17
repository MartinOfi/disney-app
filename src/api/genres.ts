import { axiosInstance } from "./axios";

export const getGenresMovies = async () => {
  try {
    return await axiosInstance.get("/genre/movie/list?language=es-ES");
  } catch (error) {
    console.error(error);
  }
};
export const getMoviesByGenre = async (id: number) => {
  try {
    return await axiosInstance.get(
      `/discover/movie?&language=en-ES&with_genres=${id}`
    );
  } catch (error) {
    console.error(error);
  }
};
