import "./Navigation.css";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import iconUser from "../../images/header/iconUser.svg";

const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);

  function handleToggleMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <nav className="navigation">
      <button
        className="navigation__button-menu"
        type="button"
        onClick={handleToggleMenu}
      ></button>
      <div
        className={`navigation__container ${
          menuActive ? "navigation__container_visible" : ""
        }`}
      >
        <div className="navigation__sidebar">
          <div className="navigation__list-container">
            <button
              className="navigation__button-close"
              type="button"
              onClick={handleToggleMenu}
            ></button>
            <ul className="navigation__list">
              <li className="navigation__item navigation__item_main">
                <Link
                  to="/"
                  className="navigation__link"
                  onClick={handleToggleMenu}
                >
                  Главная
                </Link>
              </li>
              <li className="navigation__item">
                <NavLink
                  to="/movies"
                  className="navigation__link"
                  activeClassName="navigation__link_active"
                  onClick={handleToggleMenu}
                >
                  Фильмы
                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink
                  to="/saved-movies"
                  className="navigation__link"
                  activeClassName="navigation__link_active"
                  onClick={handleToggleMenu}
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="/profile"
            className="navigation__link navigation__link_user"
            onClick={handleToggleMenu}
          >
            <p className="navigation__text">Аккаунт</p>
            <img
              className="navigation__icon-user"
              src={iconUser}
              alt="Иконка пользователя"
            />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
