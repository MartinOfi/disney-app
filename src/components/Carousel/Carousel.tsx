import { BASIC_IMAGE_URL } from "utils/constants";
import { CarouselItemStyled } from "./styles";

interface CarouselProps {
  image: string;
  title?: string;
}
export const Carousel = ({ image, title }: CarouselProps) => {
  return (
    <CarouselItemStyled className="shadow mb-5 mx-4">
      <img src={BASIC_IMAGE_URL + image} alt={title} />
      {title && <h1 className="mt-2 text-truncate pb-2">{title}</h1>}
    </CarouselItemStyled>
  );
};
