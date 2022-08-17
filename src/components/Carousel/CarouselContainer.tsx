import { useEffect, useState } from "react";
import { Carousel } from "./Carousel";
import { Carousel as CarouselAnt } from "antd";
import { getPopularMovies } from "api";
export const CarouselContainer = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((res) => {
      setPopularMovies(res.data.results.slice(0, 10));
    });
  }, []);

  return (
    <CarouselAnt autoplay autoplaySpeed={5000}>
      {popularMovies.map(({ id, title, backdrop_path }) => (
        <Carousel key={id} id={id} title={title} image={backdrop_path} />
      ))}
    </CarouselAnt>
  );
};
