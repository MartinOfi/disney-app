import { getMovieDetails } from "api/movies";
import { Details } from "components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailsContainer = () => {
  const { id } = useParams();
  useEffect(() => {
    getMovieDetails(parseInt(id)).then((res) => {
      console.log(res);
    });
  }, []);

  return <Details />;
};
export default DetailsContainer;
