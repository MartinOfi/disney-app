import { BASIC_IMAGE_URL } from "utils/constants";

export const CarouselItem = ({ movie }) => {
  const { backdrop_path, title } = movie;
  return (
    <div className="shadow mb-5 pb-2 mb-4 mx-4 text-center">
      <img
        src={BASIC_IMAGE_URL + backdrop_path}
        alt=""
        className="w-100 px-2"
        height={"40%"}
        style={{ maxHeight: "350px" }}
      />
      <h1 className="mt-2 text-white">{title}</h1>
    </div>
  );
};
