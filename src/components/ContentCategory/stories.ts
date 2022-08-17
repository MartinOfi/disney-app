interface Movies {
  id: number;
  poster_path: string;
}
export interface ContentCategoryProps {
  movies: Movies[];
  categoryName: string;
}
