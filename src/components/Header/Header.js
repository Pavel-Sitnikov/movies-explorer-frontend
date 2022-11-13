import "./Header.css";

import { Link, useLocation } from "react-router-dom";

import logoHeader from "../../images/header/logo.svg";

import NavigationUser from "../NavigationUser/NavigationUser";
import Navigation from "../Navigation/Navigation";

import { PATHNAME_FOR_HEADER } from "../../utils/constants";

const Header = ({ loggedIn }) => {
  const location = useLocation();

  function checkRoute(routes) {
    return routes.some((pathname) => pathname === location.pathname);
  }

  return (
    checkRoute(PATHNAME_FOR_HEADER) && (
      <header
        className={location.pathname === "/" ? "header" : "header_movies"}
      >
        <Link to="/" className="header__link">
          <img
            className="header__logo"
            src={logoHeader}
            alt="Логотип Movies explorer"
            title="О проекте"
          />
        </Link>
        {loggedIn ? <Navigation /> : <NavigationUser />}
      </header>
    )
  );
};

export default Header;
