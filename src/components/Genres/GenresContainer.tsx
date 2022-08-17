import { getGenresMovies } from "api";
import { useEffect, useState } from "react";
import { Genre } from "./Genre";
import { GenreGrid } from "./style";

export const GenreContainer = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    getGenresMovies().then((res) => {
      setGenres(res.data.genres.slice(0, 5));
    });
  }, []);

  return (
    <GenreGrid>
      {genres.map((genre) => (
        <Genre key={genre.id} genre={genre} />
      ))}
    </GenreGrid>
  );
};
