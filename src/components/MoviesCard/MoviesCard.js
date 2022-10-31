import "./MoviesCard.css";

const MoviesCard = () => {
  return (
    <li className="movie">
      <img className="movie__image" alt="" />
      <button className="movie__button movie__button_save" type="button">
        Сохранить
      </button>
      <div className="movie__content">
        <h2 className="movie__name">33 слова о дизайне</h2>
        <p className="movie__duration">1ч 17м</p>
      </div>
    </li>
  );
};

export default MoviesCard;
