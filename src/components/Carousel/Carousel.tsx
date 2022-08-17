import { Link } from "react-router-dom";
import { BASIC_IMAGE_URL } from "utils/constants";
import { CarouselProps } from "./stories";
import { CarouselItemStyled } from "./styles";

export const Carousel = ({ id, image, title }: CarouselProps) => {
  return (
    <Link to={`/detail/${id}`}>
      <CarouselItemStyled className="shadow mb-5">
        <img src={BASIC_IMAGE_URL + image} alt={title} />
        {title && <h1 className="mt-2 text-truncate pb-2">{title}</h1>}
      </CarouselItemStyled>
    </Link>
  );
};
