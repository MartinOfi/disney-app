import { getTopRatedMovies } from "api/movies";
import { useEffect, useState } from "react";
import { TopRated } from "./TopRated";

export const TopRatedContainer = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  useEffect(() => {
    getTopRatedMovies().then((res) => {
      setTopRatedMovies(res.data.results);
    });
  }, []);

  return <TopRated topRatedMovies={topRatedMovies} />;
};
