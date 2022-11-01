import React from "react";

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ movies }) => {
  return (
    <section className="movies">
      <ul className="movies__list">
        {movies.map((movie) => {
          return <MoviesCard key={movie.id} movie={movie} />
        })}
      </ul>
      <div className="movies__container">
        <button className="movies__button-more" type="button">
          Ещё
        </button>
      </div>
    </section>
  );
};

export default MoviesCardList;
