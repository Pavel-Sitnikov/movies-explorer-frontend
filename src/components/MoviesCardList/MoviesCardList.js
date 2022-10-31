import "./MoviesCardList.css";
// import MoviesCard from "../MoviesCard/MoviesCard";

import movie1 from "../../images/MaketMovies/1_pic.png";
import movie2 from "../../images/MaketMovies/2_pic.png";
import movie3 from "../../images/MaketMovies/3_pic.png";
import movie4 from "../../images/MaketMovies/4_pic.png";

const MoviesCardList = () => {
  return (
    <section className="movies">
      <ul className="movies__list">
        {/* <MoviesCard /> */}
        <li className="movie">
          <img className="movie__image" alt="" src={movie1} />
          <button
            className="movie__button movie__button_delete"
            type="button"
            title="Сохранить"
          >
            Сохранить
          </button>
          <div className="movie__content">
            <h2 className="movie__name">33 слова о дизайне</h2>
            <p className="movie__duration">1ч 17м</p>
          </div>
        </li>
        <li className="movie">
          <img className="movie__image" alt="" src={movie2} />
          <button
            className="movie__button movie__button_saved"
            type="button"
            title="Сохранить"
          >
            Сохранить
          </button>
          <div className="movie__content">
            <h2 className="movie__name">Киноальманах «100 лет дизайна»</h2>
            <p className="movie__duration">1ч 17м</p>
          </div>
        </li>
        <li className="movie">
          <img className="movie__image" alt="" src={movie3} />
          <button className="movie__button" type="button" title="Сохранить">
            Сохранить
          </button>
          <div className="movie__content">
            <h2 className="movie__name">В погоне за Бенкси</h2>
            <p className="movie__duration">1ч 17м</p>
          </div>
        </li>
        <li className="movie">
          <img className="movie__image" alt="" src={movie4} />
          <button
            className="movie__button movie__button_save"
            type="button"
            title="Сохранить"
          >
            Сохранить
          </button>
          <div className="movie__content">
            <h2 className="movie__name">Баския: Взрыв реальности</h2>
            <p className="movie__duration">1ч 17м</p>
          </div>
        </li>
        <li className="movie">
          <img className="movie__image" alt="" src={movie1} />
          <button className="movie__button" type="button" title="Сохранить">
            Сохранить
          </button>
          <div className="movie__content">
            <h2 className="movie__name">Бег это свобода</h2>
            <p className="movie__duration">1ч 17м</p>
          </div>
        </li>
        <li className="movie">
          <img className="movie__image" alt="" src={movie1} />
          <button
            className="movie__button movie__button_saved"
            type="button"
            title="Сохранить"
          >
            Сохранить
          </button>
          <div className="movie__content">
            <h2 className="movie__name">Книготорговцы</h2>
            <p className="movie__duration">1ч 17м</p>
          </div>
        </li>
        <li className="movie">
          <img className="movie__image" alt="" src={movie1} />
          <button className="movie__button" type="button" title="Сохранить">
            Сохранить
          </button>
          <div className="movie__content">
            <h2 className="movie__name">Когда я думаю о Германии ночью</h2>
            <p className="movie__duration">1ч 17м</p>
          </div>
        </li>
        <li className="movie">
          <img className="movie__image" alt="" src={movie1} />
          <button className="movie__button" type="button" title="Сохранить">
            Сохранить
          </button>
          <div className="movie__content">
            <h2 className="movie__name">
              Gimme Danger: История Игги и The Stooges
            </h2>
            <p className="movie__duration">1ч 17м</p>
          </div>
        </li>
        <li className="movie">
          <img className="movie__image" alt="" src={movie1} />
          <button className="movie__button" type="button" title="Сохранить">
            Сохранить
          </button>
          <div className="movie__content">
            <h2 className="movie__name">Дженис: Маленькая девочка грустит</h2>
            <p className="movie__duration">1ч 17м</p>
          </div>
        </li>
        <li className="movie">
          <img className="movie__image" alt="" src={movie1} />
          <button className="movie__button" type="button" title="Сохранить">
            Сохранить
          </button>
          <div className="movie__content">
            <h2 className="movie__name">Соберись перед прыжком</h2>
            <p className="movie__duration">1ч 17м</p>
          </div>
        </li>
        <li className="movie">
          <img className="movie__image" alt="" src={movie1} />
          <button className="movie__button" type="button" title="Сохранить">
            Сохранить
          </button>
          <div className="movie__content">
            <h2 className="movie__name">Пи Джей Харви: A dog called money</h2>
            <p className="movie__duration">1ч 17м</p>
          </div>
        </li>
        <li className="movie">
          <img className="movie__image" alt="" src={movie1} />
          <button className="movie__button" type="button" title="Сохранить">
            Сохранить
          </button>
          <div className="movie__content">
            <h2 className="movie__name">По волнам: Искусство звука в кино</h2>
            <p className="movie__duration">1ч 17м</p>
          </div>
        </li>
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
