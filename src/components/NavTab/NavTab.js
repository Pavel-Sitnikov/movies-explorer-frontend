import "./NavTab.css";

const NavTab = () => {
  return (
    <nav className="navigation-promo">
      <ul className="navigation-promo__list">
        <li className="navigation-promo__item">
          <a className="navigation-promo__link" href="#about-project">
            О проекте
          </a>
          <a className="navigation-promo__link" href="#techs">
            Технологии
          </a>
          <a className="navigation-promo__link" href="#about-me">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
