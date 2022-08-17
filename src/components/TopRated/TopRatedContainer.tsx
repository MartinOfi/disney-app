import { Carousel as CarouselAntd } from "antd";
import { getTopRatedMovies } from "api/movies";
import { Carousel } from "components/Carousel/Carousel";
import { useEffect, useState } from "react";

export const TopRatedContainer = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  useEffect(() => {
    getTopRatedMovies().then((res) => {
      setTopRatedMovies(res.data.results);
    });
  }, []);
  return (
    <div className="mx-5 px-4">
      <p className="text-white h5 my">Los más valorados</p>
      <CarouselAntd slidesToShow={5} centerMode autoplay autoplaySpeed={5000}>
        {topRatedMovies.map(({ id, poster_path }) => {
          return <Carousel key={id} id={id} image={poster_path} />;
        })}
      </CarouselAntd>
    </div>
  );
};
