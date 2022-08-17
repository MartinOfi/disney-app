import { Link } from "react-router-dom";
import { GenresProps } from "./stories";
import { GenreStyle } from "./style";

export const Genre = ({ genre }: GenresProps) => {
  const { name, id } = genre;
  return (
    <Link to={`/category/${id}`}>
      <GenreStyle className="mx-2">
        <p className="h2 mb-0 ">{name}</p>
      </GenreStyle>
    </Link>
  );
};
