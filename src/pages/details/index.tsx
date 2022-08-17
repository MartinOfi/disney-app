import { getMovieCredits, getMovieDetails } from "api/movies";
import { Details } from "components";
import { Actor } from "components/Details/stories";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const DetailsContainer = () => {
  const [movie, setMovie] = useState<any>({});
  const [actors, setActors] = useState<Actor[]>([]);
  const { id } = useParams();
  useEffect(() => {
    getMovieDetails(parseInt(id)).then((res) => {
      setMovie(res.data);
    });
    getMovieCredits(parseInt(id)).then((res) => {
      setActors(res.data.cast.filter((cast) => cast.popularity > 20));
    });
  }, []);
  return <Details {...movie} actors={actors} />;
};
export default DetailsContainer;
