import "./Header.css";

import { Link } from "react-router-dom";

import logoHeader from "../../images/header/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img
          className="header__logo"
          src={logoHeader}
          alt="Логотип Movies explorer"
        />
      </Link>
      <div className="header__container">
        <Link to="/signup" className="header__signup">
          Регистрация
        </Link>
        <Link to="/signin" className="header__signin">
          Войти
        </Link>
      </div>
    </header>
  );
};

export default Header;
