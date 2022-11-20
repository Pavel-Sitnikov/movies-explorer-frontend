import React from "react";

import "./MoviesCard.css";

const MoviesCard = ({
  movie,
  savedMovies,
  handleToggleMarkerSave,
  pageWithSavedMovies,
  onDeleteMovie,
}) => {
  const saved = savedMovies
    ? savedMovies.some((item) => item.movieId === movie.id)
    : false;

  function savingMovie() {
    handleToggleMarkerSave({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    });
  }

  function timeTranslation(minuteData) {
    let hours = Math.floor(minuteData / 60);
    let minutes = minuteData % 60;
    if (hours === 0) {
      return `${minutes}м`;
    }
    return `${hours}ч ${minutes}м`;
  }

  function deleteMovie() {
    onDeleteMovie(movie);
  }

  return (
    <li className="movie">
      <div className="movie__image-container">
        <a target="_blank" rel="noreferrer" href={movie.trailerLink}>
          <img
            className="movie__image"
            alt={movie.nameRU}
            src={
              pageWithSavedMovies
                ? movie.image
                : `https://api.nomoreparties.co/${movie.image.url}`
            }
          />
        </a>
        {pageWithSavedMovies ? (
          <button
            className="movie__button movie__button_delete"
            type="button"
            onClick={deleteMovie}
          ></button>
        ) : (
          <button
            className={`movie__button movie__button_${
              saved ? "saved" : "save"
            }`}
            type="button"
            onClick={savingMovie}
          ></button>
        )}
      </div>
      <div className="movie__content">
        <h2 className="movie__name">{movie.nameRU}</h2>
        <p className="movie__duration">{timeTranslation(movie.duration)}</p>
      </div>
    </li>
  );
};

export default MoviesCard;
