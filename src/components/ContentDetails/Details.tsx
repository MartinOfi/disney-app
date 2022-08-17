import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel, Modal, Progress } from "antd";
import { useSlidesToShow } from "hooks/useSlidesToShow";
import { BASIC_IMAGE_URL, responsive } from "utils/constants";
import { DetailsProps } from "./stories";
import { DistributionCard, MoviePage, MoviePageWrapper } from "./styles";
import { Helmet } from "react-helmet";
export const ContentDetails = ({
  movie,
  actors,
  trailerModal,
  handleChangeTrailerModal,
}: DetailsProps) => {
  const { slides } = useSlidesToShow(responsive);
  const {
    backdrop_path,
    poster_path,
    original_title,
    genres,
    overview,
    release_date,
    runtime,
    videos,
    vote_average,
  } = movie;

  return (
    <div>
      <Helmet>
        <title>{original_title}</title>
      </Helmet>
      <MoviePageWrapper bgImage={BASIC_IMAGE_URL + backdrop_path}>
        <MoviePage>
          <div className="d-flex align-items-center mb-4">
            <img src={BASIC_IMAGE_URL + poster_path} alt={original_title} />
            <div className="ms-4">
              <h2>Detalles:</h2>
              <p>
                {release_date} • {runtime} min
              </p>
              <section className="d-flex">
                {genres &&
                  genres.map((genre) => (
                    <p key={genre.id} className="me-3">
                      {genre.name}
                    </p>
                  ))}
              </section>
              <p className="h5">Promedio de votos </p>
              <Progress type="circle" percent={Math.trunc(vote_average * 10)} />
              <br />
              {videos?.results.length > 0 && (
                <button
                  onClick={handleChangeTrailerModal}
                  className="btn btn-primary mt-4"
                >
                  <FontAwesomeIcon icon={faPlay} /> Ver Trailer
                </button>
              )}
            </div>
          </div>
          <div className="p-3">
            <h2>Descripcion</h2>
            <p className="h5">{overview}</p>
          </div>
          {actors.length > 0 && (
            <div className="p-3">
              <h2>Reparto:</h2>
              <Carousel
                centerMode
                slidesPerRow={slides}
                autoplay
                autoplaySpeed={5000}
              >
                {actors.map(({ id, name, profile_path, character }) => (
                  <div key={id}>
                    <DistributionCard>
                      <img src={BASIC_IMAGE_URL + profile_path} alt={name} />
                      <strong className="text-truncate">{name}</strong>
                      <p className="text-truncate">{character}</p>
                    </DistributionCard>
                  </div>
                ))}
              </Carousel>
            </div>
          )}
        </MoviePage>
      </MoviePageWrapper>

      <Modal
        visible={trailerModal}
        footer={false}
        width="80vw"
        onCancel={handleChangeTrailerModal}
        destroyOnClose
      >
        <div className="p-3">
          {videos?.results.length > 0 ? (
            <iframe
              width="100%"
              height="700px"
              src={`https://www.youtube.com/embed/${videos.results[0].key}`}
              title={videos.results[0].name}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope"
            ></iframe>
          ) : null}
        </div>
      </Modal>
    </div>
  );
};
