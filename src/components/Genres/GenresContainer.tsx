import { Carousel } from "antd";
import { getGenresMovies } from "api/movies";
import { useEffect, useState } from "react";
import { Genre } from "./Genre";

export const GenreContainer = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    getGenresMovies().then((res) => {
      setGenres(res.data.genres);
    });
  }, []);

  return (
    <Carousel centerMode slidesToShow={5} swipeToSlide>
      {genres.map((genre) => (
        <Genre key={genre.id} genre={genre} />
      ))}
    </Carousel>
  );
};
