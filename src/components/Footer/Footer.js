import "./Footer.css";

import { useLocation } from "react-router-dom";

import { pathnameForFooter } from "../../utils/constant";

const Footer = () => {
  const location = useLocation();

  function checkRoute(routes) {
    return routes.some((pathname) => pathname === location.pathname);
  }

  return (
    checkRoute(pathnameForFooter) && (
      <footer className="footer">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__container">
          <p className="footer__copyright">&copy; 2022</p>
          <nav>
            <ul className="footer__links">
              <li>
                <a
                  className="footer__link"
                  href="https://practicum.yandex.ru"
                  target="_blank"
                  rel="noreferrer"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li>
                <a
                  className="footer__link"
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    )
  );
};

export default Footer;
