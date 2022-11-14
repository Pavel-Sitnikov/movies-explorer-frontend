import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import Preloader from "../Preloader/Preloader";

const Movies = ({
  movies,
  onSubmit,
  checked,
  onChecked,
  isLoading,
  isFailedRequest,
  onUploadingMovies,
}) => {
  return (
    <section>
      <SearchForm
        movies={movies}
        onSubmit={onSubmit}
        checked={checked}
        onChecked={onChecked}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          isFailedRequest={isFailedRequest}
          onUploadingMovies={onUploadingMovies}
        />
      )}
    </section>
  );
};

export default Movies;
