import { Link } from "react-router-dom";
import { GenresProps } from "./stories";
import { GenreStyle } from "./style";

export const Genre = ({ genre }: GenresProps) => {
  const { name, id } = genre;
  return (
    <Link to={`/category/${id}`}>
      <GenreStyle>
        <p>{name}</p>
      </GenreStyle>
    </Link>
  );
};
