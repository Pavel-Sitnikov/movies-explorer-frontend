import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import { movies } from "../../utils/constant";

const Movies = () => {
  return (
    <section>
      <SearchForm />
      <MoviesCardList movies={movies} />
    </section>
  );
};

export default Movies;
