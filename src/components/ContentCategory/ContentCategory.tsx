import { Carousel as CarouselAntd } from "antd";
import { Carousel } from "components/Carousel/Carousel";
import { useSlidesToShow } from "hooks/useSlidesToShow";
import { responsive } from "utils/constants";
export const ContentCategory = ({ movies, categoryName }) => {
  const { slides } = useSlidesToShow(responsive);
  return (
    <div className="p-5">
      <h1 className="text-white mb-5">{categoryName}</h1>
      <CarouselAntd
        slidesToShow={slides}
        slidesPerRow={3}
        centerMode
        autoplay
        autoplaySpeed={5000}
      >
        {movies.map(({ id, poster_path }) => {
          return <Carousel key={id} id={id} image={poster_path} />;
        })}
      </CarouselAntd>
    </div>
  );
};
