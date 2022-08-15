import { axiosInstance } from "api/axios";
import { useEffect, useState } from "react";
import { CarouselItem } from "./Carousel";
import { Carousel } from "antd";
import { getPopularMovies } from "api/movies";
export const CarouselContainer = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((res) => {
      setPopularMovies(res.data.results.slice(0, 10));
    });
  }, []);
  return (
    <Carousel centerMode autoplay autoplaySpeed={5000}>
      {popularMovies.map((movie) => (
        <CarouselItem key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
};
