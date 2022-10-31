import "../AuthFormContainer/AuthFormContainer.css";

import AuthFormContainer from "../AuthFormContainer/AuthFormContainer";

const Register = () => {
  return (
    <AuthFormContainer
      title="Добро пожаловать!"
      buttonName="Зарегистрироваться"
      questionText="Уже зарегистрированы?"
      path="/signup"
      link="Войти"
    >
      <label className="auth__label">
        Имя
        <input
          className="auth__input"
          type="text"
          name="name"
          placeholder="Виталий"
          required
        ></input>
        <span className="auth__error"></span>
      </label>
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
          placeholder="••••••••••••••"
          required
        ></input>
        <span className="auth__error">Что-то пошло не так...</span>
      </label>
    </AuthFormContainer>
  );
};

export default Register;
