import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

import { useEffect } from "react";

import usePagination from "../../utils/usePagination";
import getWindowSize from "../../utils/useWindowResizing";
import { LOADMORE } from "../../utils/constants";

const MoviesCardList = ({
  movies,
  savedMovies,
  failedRequest,
  handleToggleMarkerSave,
  onDeleteMovie,
  pageWithSavedMovies,
  onUploadingMovies,
}) => {
  const { loadMore, initValue, calcInitValue } = usePagination();
  const screenSize = getWindowSize();

  useEffect(() => {
    calcInitValue();
  }, [screenSize.width]);

  const pagination =
    movies !== null
      ? movies.length === 0 || movies.length <= initValue
        ? "movies__button-more_hidden"
        : movies.length >= LOADMORE
        ? "movies__button-more"
        : "movies__button-more_hidden"
      : "";

  return (
    <section className="movies">
      {failedRequest ? (
        <span className="movies__request-error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </span>
      ) : onUploadingMovies ? (
        <span className="movies__notfound">Ничего не найдено</span>
      ) : (
        <ul className="movies__list">
          {movies.slice(0, initValue).map((item) => {
            return (
              <MoviesCard
                key={pageWithSavedMovies ? item.movieId : item.id}
                movie={item}
                savedMovies={savedMovies}
                handleToggleMarkerSave={handleToggleMarkerSave}
                onDeleteMovie={onDeleteMovie}
                pageWithSavedMovies={pageWithSavedMovies}
              />
            );
          })}
        </ul>
      )}
      <div className="movies__container">
        <button
          className={
            pageWithSavedMovies ? "movies__button-more_hidden" : pagination
          }
          type="button"
          onClick={loadMore}
        >
          Ещё
        </button>
      </div>
    </section>
  );
};

export default MoviesCardList;
