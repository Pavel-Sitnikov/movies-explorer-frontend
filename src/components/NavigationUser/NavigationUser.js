import "./NavigationUser.css";

import { Link } from "react-router-dom";

const NavigationUser = () => {
  return (
    <nav className="navigation-auth">
      <ul className="navigation-auth__container">
        <li>
          <Link
            to="/signup"
            className="navigation-auth__link navigation-auth__link_signup"
          >
            Регистрация
          </Link>
        </li>
        <li>
          <Link
            to="/signin"
            className="navigation-auth__link navigation-auth__link_signin"
          >
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationUser;
