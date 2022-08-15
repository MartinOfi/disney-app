import { GenreStyle } from "./style";

export const Genre = ({ genre }) => {
  const { name } = genre;
  return (
    <GenreStyle className="mx-2">
      <p className="h2 mb-0 ">{name}</p>
    </GenreStyle>
  );
};
/* className="card shadow d-flex justify-content-center align-items-center bg-secondary text-white mx-3 mb-5 overflow-hidden"
        style={{ height: "100px" }} */
