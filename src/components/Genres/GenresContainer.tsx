import { getGenresMovies } from "api/genres";
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
    <GenreGrid className="mx-5 p-3">
      {genres.map((genre) => (
        <Genre key={genre.id} genre={genre} />
      ))}
    </GenreGrid>
  );
};
