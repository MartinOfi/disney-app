import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel, Progress } from "antd";
import { BASIC_IMAGE_URL } from "utils/constants";
import { DetailsProps } from "./stories";
import { DistributionCard, MoviePage, MoviePageWrapper } from "./styles";
export const Details = ({
  backdrop_path,
  poster_path,
  original_title,
  genres,
  homepage,
  id,
  overview,
  release_date,
  runtime,
  videos,
  vote_average,
  actors,
}: DetailsProps) => {
  return (
    <div>
      <MoviePageWrapper bgImage={BASIC_IMAGE_URL + backdrop_path}>
        <MoviePage>
          <div className="d-flex align-items-center mb-4">
            <img src={BASIC_IMAGE_URL + poster_path} alt={original_title} />
            <div className="ms-4">
              <h2 className="text-white ">Detalles:</h2>
              <p>
                {release_date} • {runtime} min
              </p>
              <section className="d-flex">
                {genres &&
                  genres.map((genre) => (
                    <p key={genre.id} className="text-white me-3">
                      {genre.name}
                    </p>
                  ))}
              </section>
              <p className="h5">Promedio de votos </p>
              <Progress type="circle" percent={Math.trunc(vote_average * 10)} />
              <br />
              <button className="btn btn-primary mt-4">
                <FontAwesomeIcon icon={faPlay} /> Ver Trailer
              </button>
            </div>
          </div>
          <div className="p-3">
            <h2 className="text-white">Descripcion</h2>
            <p className="h5 text-white">{overview}</p>
          </div>
          <div className="p-3">
            <h2 className="text-white">Reparto:</h2>
            <Carousel centerMode slidesPerRow={4} autoplay autoplaySpeed={5000}>
              {actors.map(({ id, name, profile_path, character }) => (
                <div>
                  <DistributionCard>
                    <img src={BASIC_IMAGE_URL + profile_path} alt={name} />
                    <strong>{name}</strong>
                    <p>{character}</p>
                  </DistributionCard>
                </div>
              ))}
            </Carousel>
          </div>
        </MoviePage>
      </MoviePageWrapper>
    </div>
  );
};
/*  <CarouselAnt autoplay autoplaySpeed={5000}>
      {popularMovies.map(({ id, title, backdrop_path }) => (
        <Carousel key={id} id={id} title={title} image={backdrop_path} />
      ))}
    </CarouselAnt> */
