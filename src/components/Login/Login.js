import AuthFormContainer from "../AuthFormContainer/AuthFormContainer";
import "../AuthFormContainer/AuthFormContainer.css";

import useValidation from "../../utils/useValidation";

const Login = ({ onLogin, loginError, setLoginError }) => {
  const loginData = {
    email: "",
    password: "",
  };

  const { values, handleChange, errors, isValid, resetForm } =
    useValidation(loginData);

  function handleInputChange(evt) {
    handleChange(evt);
    setLoginError("");
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin({ email: values.email, password: values.password });
  }

  return (
    <AuthFormContainer
      title="Рады видеть!"
      buttonName="Войти"
      questionText="Ещё не зарегистрированы?"
      path="/signup"
      link="Регистрация"
      isValid={isValid}
      resetForm={resetForm}
      onSubmit={handleSubmit}
      textError={loginError}
    >
      <label className="auth__label">
        E-mail
        <input
          className="auth__input"
          type="email"
          name="email"
          pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
          required
          value={values.email}
          onChange={handleInputChange}
        ></input>
        <span
          className={`auth__error ${
            errors.email ? "auth__error_visible" : "auth__error"
          }`}
        >
          {errors.email}
        </span>
      </label>
      <label className="auth__label">
        Пароль
        <input
          className="auth__input"
          type="password"
          name="password"
          required
          value={values.password}
          onChange={handleInputChange}
        ></input>
        <span
          className={`auth__error ${
            errors.password ? "auth__error_visible" : "auth__error"
          }`}
        >
          {errors.password}
        </span>
      </label>
    </AuthFormContainer>
  );
};

export default Login;
