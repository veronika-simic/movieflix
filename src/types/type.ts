export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export interface MovieContextType {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number | string) => void;
  isFavorite: (movieId: number | string) => boolean;
}
