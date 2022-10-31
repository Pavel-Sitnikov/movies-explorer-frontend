import "./Header.css";

import { Link, useLocation } from "react-router-dom";

import logoHeader from "../../images/header/logo.svg";

import NavigationUser from "../NavigationUser/NavigationUser";
import Navigation from "../Navigation/Navigation";

import { pathnameForHeader } from "../../utils/constant";

const Header = () => {
  const location = useLocation();

  function checkRoute(routes) {
    return routes.some((pathname) => pathname === location.pathname);
  }

  return (
    checkRoute(pathnameForHeader) && (
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
        {location.pathname === "/" ? <NavigationUser /> : <Navigation />}
      </header>
    )
  );
};

export default Header;
