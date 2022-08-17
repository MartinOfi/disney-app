import { getMovieCredits, getMovieDetails } from "api/movies";
import { ContentDetails } from "components";
import { Actor } from "components/ContentDetails/stories";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const addActorsByPopularity = (actors: Actor[]) => {
  const actorsByPopularity = actors
    .sort((a, b) => {
      return b.popularity - a.popularity;
    })
    .slice(0, 10);
  return actorsByPopularity;
};
const DetailsContainer = () => {
  const [movie, setMovie] = useState<any>({});
  const [actors, setActors] = useState<Actor[]>([]);
  const [trailerModal, setTrailerModal] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    getMovieDetails(parseInt(id)).then(({ data }) => {
      setMovie(data);
    });
    getMovieCredits(parseInt(id)).then(({ data: { cast } }) => {
      setActors(addActorsByPopularity(cast));
    });
  }, []);

  const handleChangeTrailerModal = () => {
    setTrailerModal(!trailerModal);
  };

  return (
    <ContentDetails
      movie={movie}
      actors={actors}
      handleChangeTrailerModal={handleChangeTrailerModal}
      trailerModal={trailerModal}
    />
  );
};
export default DetailsContainer;
