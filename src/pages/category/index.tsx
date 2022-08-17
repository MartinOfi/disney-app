import { getGenresMovies, getMoviesByGenre } from "api";
import { ContentCategory } from "components/ContentCategory/ContentCategory";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const [movies, setMovies] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getMoviesByGenre(id).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  useEffect(() => {
    const getCategoryName = async () => {
      const name: string = await getGenresMovies().then(
        ({ data: { genres } }) =>
          genres.find((genre) => genre.id.toString() === id).name
      );
      setCategoryName(name);
    };
    getCategoryName();
  }, []);

  return <ContentCategory movies={movies} categoryName={categoryName} />;
};
export default CategoryPage;
