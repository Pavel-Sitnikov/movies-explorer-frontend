import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

import { useEffect } from "react";

import usePagination from "../../utils/usePagination";
import getWindowSize from "../../utils/useWindowResizing";

const MoviesCardList = ({ movies, isFailedRequest, onUploadingMovies }) => {
  const { loadMore, initValue, calcInitValue } = usePagination();
  const windowSize = getWindowSize();

  useEffect(() => {
    calcInitValue();
  }, [windowSize.width]);

  const pagination =
    movies !== 0
      ? movies.length === 0 || movies.length <= initValue
        ? "movies__button-more_hidden"
        : movies.length >= 3
        ? "movies__button-more"
        : "movies__button-more_hidden"
      : "";

  return (
    <section className="movies">
      {isFailedRequest ? (
        <span className="movies__request-error">
          «Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз»
        </span>
      ) : onUploadingMovies ? (
        <span className="movies__notfound">Фильмы не найдены</span>
      ) : (
        <ul className="movies__list">
          {movies.slice(0, initValue).map((item) => {
            return <MoviesCard key={item.id} movie={item} />;
          })}
        </ul>
      )}
      <div className="movies__container">
        <button className={pagination} type="button" onClick={loadMore}>
          Ещё
        </button>
      </div>
    </section>
  );
};

export default MoviesCardList;
