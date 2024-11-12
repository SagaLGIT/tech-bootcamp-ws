import { Movie } from "../types/Movie";

/* This function calls our BFF. The available endpoins are found in the documentation */
export const getMovies = async (title: string): Promise<Movie[]> => {
  console.log(
    `You called the fetchMovies function with title ${title} - amazing!`
  );
  return [];
};
