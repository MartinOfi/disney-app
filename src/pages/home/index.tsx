import { CarouselContainer } from "components/Carousel/CarouselContainer";
import { GenreContainer } from "components/Genres/GenresContainer";
import { TopRatedContainer } from "components/TopRated/TopRatedContainer";

const HomePage = () => {
  return (
    <div>
      <CarouselContainer />
      <GenreContainer />
      <TopRatedContainer />
    </div>
  );
};
export default HomePage;
