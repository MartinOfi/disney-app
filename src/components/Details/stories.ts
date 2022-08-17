export interface DetailsProps {
  backdrop_path: string;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  videos: {
    results: {
      id: string;
      name: string;
      site: string;
      size: number;
      type: string;
    }[];
  };
  vote_average: number;
  actors: Actor[];
}
export interface Actor {
  id: number;
  character?: string;
  name: string;
  profile_path: string;
}
