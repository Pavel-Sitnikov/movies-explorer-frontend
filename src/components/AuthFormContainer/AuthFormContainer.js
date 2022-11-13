import { Link } from "react-router-dom";

import logoHeader from "../../images/header/logo.svg";

const AuthFormContainer = ({
  title,
  children,
  buttonName,
  questionText,
  path,
  link,
  isValid,
  onSubmit,
  textError,
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
        <form className="auth__form" onSubmit={onSubmit}>
          {children}
          <span className="auth__submit-error">{textError}</span>
          <button
            className={`auth__btn-send ${
              isValid ? "auth__btn-send" : "auth__btn-send_disabled"
            }`}
            type="submit"
            disabled={!isValid}
          >
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
