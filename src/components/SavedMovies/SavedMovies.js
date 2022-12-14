import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

import { savedMovies } from "../../utils/constant";

const SavedMovies = () => {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList movies={savedMovies} />
    </section>
  );
};

export default SavedMovies;
