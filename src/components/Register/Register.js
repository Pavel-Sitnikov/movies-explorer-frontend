import "../AuthFormContainer/AuthFormContainer.css";

import AuthFormContainer from "../AuthFormContainer/AuthFormContainer";

import useValidation from "../../utils/useValidation";

const Register = ({
  onRegister,
  registerError,
  setRegisterError,
  isLoading,
}) => {
  const registerData = {
    name: "",
    email: "",
    password: "",
  };

  const { values, handleChange, errors, isValid, resetForm } =
    useValidation(registerData);

  function handleInputChange(evt) {
    handleChange(evt);
    setRegisterError("");
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister({
      email: values.email,
      password: values.password,
      name: values.name,
    });
  }

  return (
    <AuthFormContainer
      title="Добро пожаловать!"
      buttonName="Зарегистрироваться"
      questionText="Уже зарегистрированы?"
      path="/signin"
      link="Войти"
      isValid={isValid}
      resetForm={resetForm}
      onSubmit={handleSubmit}
      textError={registerError}
      isLoading={isLoading}
    >
      <label className="auth__label">
        Имя
        <input
          className="auth__input"
          type="text"
          name="name"
          minLength="2"
          maxLength="30"
          pattern="^[A-Za-zА-Яа-я-\s]+$"
          required
          value={values.name}
          onChange={handleInputChange}
          disabled={isLoading}
        ></input>
        <span
          className={`auth__error ${
            errors.name ? "auth__error_visible" : "profile__error"
          }`}
        >
          {errors.name}
        </span>
      </label>
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
          disabled={isLoading}
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
          disabled={isLoading}
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

export default Register;
