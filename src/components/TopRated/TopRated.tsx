import { Carousel as CarouselAntd } from "antd";
import { Carousel } from "components/Carousel";
import { useSlidesToShow } from "hooks/useSlidesToShow";
import { responsive } from "utils/constants";
export const TopRated = ({ topRatedMovies }) => {
  const { slides } = useSlidesToShow(responsive);
  return (
    <div className="mx-5 px-4">
      <p className="text-white h5 my">Los más valorados</p>
      <CarouselAntd
        slidesToShow={slides}
        centerMode
        autoplay
        autoplaySpeed={5000}
      >
        {topRatedMovies.map(({ id, poster_path }) => {
          return <Carousel key={id} id={id} image={poster_path} />;
        })}
      </CarouselAntd>
    </div>
  );
};
