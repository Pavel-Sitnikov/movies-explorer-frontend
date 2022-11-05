import { Link } from "react-router-dom";

import logoHeader from "../../images/header/logo.svg";

const AuthFormContainer = ({
  title,
  children,
  buttonName,
  questionText,
  path,
  link,
}) => {
  return (
    <section className="auth">
      <div className="auth__container">
        <img
          className="auth__logo"
          src={logoHeader}
          alt="Логотип Movies explorer"
        />
        <h2 className="auth__title">{title}</h2>
        <form className="auth__form">
          {children}
          <button className="auth__btn-send" type="submit">
            {buttonName}
          </button>
        </form>
        <p className="auth__question">
          {questionText}
          <Link to={path} className="auth__link">
            {link}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default AuthFormContainer;
