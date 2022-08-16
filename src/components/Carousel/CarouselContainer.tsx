import { useEffect, useState } from "react";
import { Carousel } from "./Carousel";
import { Carousel as CarouselAnt } from "antd";
import { getPopularMovies } from "api/movies";
export const CarouselContainer = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((res) => {
      setPopularMovies(res.data.results.slice(0, 10));
    });
  }, []);
  console.log(popularMovies);

  return (
    <CarouselAnt centerMode autoplay autoplaySpeed={5000}>
      {popularMovies.map(({ id, title, backdrop_path }) => (
        <Carousel key={id} title={title} image={backdrop_path} />
      ))}
    </CarouselAnt>
  );
};
/* 
{topRatedMovies.map(({ id, title, backdrop_path }) => {
          return <Carousel key={id} title={title} image={backdrop_path} />;
        })}
*/
