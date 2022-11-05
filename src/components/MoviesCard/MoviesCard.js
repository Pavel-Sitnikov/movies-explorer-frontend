import React from "react";

import "./MoviesCard.css";

import { useState } from "react";
import { useLocation } from "react-router-dom";

const MoviesCard = ({ movie }) => {
  const location = useLocation();

  const [like, setLike] = useState(false);

  function handleLikeButton() {
    setLike(!like);
  }
  return (
    <li className="movie">
      <div className="movie__image-container">
        <img className="movie__image" alt={movie.name} src={movie.image} />

        {location.pathname === "/saved-movies" ? (
          <button
            className="movie__button movie__button_delete"
            type="button"
          ></button>
        ) : (
          <button
            className={`movie__button movie__button_${like ? "saved" : "save"}`}
            type="button"
            onClick={handleLikeButton}
          ></button>
        )}
      </div>
      <div className="movie__content">
        <h2 className="movie__name">{movie.name}</h2>
        <p className="movie__duration">{movie.duration}</p>
      </div>
    </li>
  );
};

export default MoviesCard;
