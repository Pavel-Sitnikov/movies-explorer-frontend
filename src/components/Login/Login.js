import AuthFormContainer from "../AuthFormContainer/AuthFormContainer";
import "../AuthFormContainer/AuthFormContainer.css";

const Login = () => {
  return (
    <AuthFormContainer
      title="Рады видеть!"
      buttonName="Войти"
      questionText="Ещё не зарегистрированы?"
      path="/signup"
      link="Регистрация"
    >
      <label className="auth__label">
        E-mail
        <input
          className="auth__input"
          type="email"
          name="email"
          placeholder="pochta@yandex.ru"
          required
        ></input>
        <span className="auth__error"></span>
      </label>
      <label className="auth__label">
        Пароль
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder=""
          required
        ></input>
        <span className="auth__error"></span>
      </label>
    </AuthFormContainer>
  );
};

export default Login;
