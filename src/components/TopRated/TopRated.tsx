import { Carousel as CarouselAntd } from "antd";
import { Carousel } from "components/Carousel/Carousel";
import { SlidesResponsive, useSlidesToShow } from "hooks/useSlidesToShow";

const responsive: SlidesResponsive[] = [
  {
    breakpoint: 480,
    slides: 1,
  },
  {
    breakpoint: 768,
    slides: 2,
  },
  {
    breakpoint: 1024,
    slides: 3,
  },

  {
    breakpoint: 1300,
    slides: 4,
  },
  {
    breakpoint: 1600,
    slides: 5,
  },
];

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
