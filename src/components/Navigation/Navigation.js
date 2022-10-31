import "./Navigation.css";

import { Link } from "react-router-dom";

import iconUser from "../../images/header/iconUser.svg";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__container">
        <li className="navigation__item">
          <Link to="/movies" className="navigation__link">
            Фильмы
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/saved-movies" className="navigation__link">
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
      <Link to="/profile" className="navigation__link navigation__link_user">
        <p className="navigation__text">Аккаунт</p>
        <img
          className="navigation__icon-user"
          src={iconUser}
          alt="Иконка пользователя"
        />
      </Link>
    </nav>
  );
};

export default Navigation;
