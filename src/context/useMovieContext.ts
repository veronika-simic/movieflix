import { useContext } from "react";
import MovieContext from "./MovieContext";
import type { MovieContextType } from "../types/type";

export const useMovieContext = (): MovieContextType => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};
