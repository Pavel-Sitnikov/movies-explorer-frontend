import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import Preloader from "../Preloader/Preloader";

const Movies = ({
  movies,
  savedMovies,
  onSubmit,
  checked,
  onChecked,
  isLoading,
  failedRequest,
  handleToggleMarkerSave,
  onUploadingMovies,
}) => {
  return (
    <section>
      <SearchForm onSubmit={onSubmit} checked={checked} onChecked={onChecked} />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          savedMovies={savedMovies}
          failedRequest={failedRequest}
          handleToggleMarkerSave={handleToggleMarkerSave}
          onUploadingMovies={onUploadingMovies}
        />
      )}
    </section>
  );
};

export default Movies;
