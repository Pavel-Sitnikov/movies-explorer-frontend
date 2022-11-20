import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = ({
  savedMovies,
  onSubmit,
  checked,
  onChecked,
  onDeleteMovie,
  onUploadingMovies,
  pageWithSavedMovies,
}) => {
  return (
    <section className="saved-movies">
      <SearchForm
        onSubmit={onSubmit}
        checked={checked}
        onChecked={onChecked}
        pageWithSavedMovies={pageWithSavedMovies}
      />
      <MoviesCardList
        movies={savedMovies}
        savedMovies={savedMovies}
        onDeleteMovie={onDeleteMovie}
        onUploadingMovies={onUploadingMovies}
        pageWithSavedMovies={pageWithSavedMovies}
      />
    </section>
  );
};

export default SavedMovies;
