import { BASIC_IMAGE_URL } from "utils/constants";
import { CarouselProps } from "./stories";
import { CarouselItemStyled } from "./styles";

export const Carousel = ({ image, title }: CarouselProps) => {
  return (
    <CarouselItemStyled className="shadow mb-5 mx-4">
      <img src={BASIC_IMAGE_URL + image} alt={title} />
      {title && <h1 className="mt-2 text-truncate pb-2">{title}</h1>}
    </CarouselItemStyled>
  );
};
