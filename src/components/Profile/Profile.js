import "./Profile.css";

import { useContext, useEffect, useState } from "react";

import { CurrentUserContext } from "../../context/CurrentUserContext";

import useValidation from "../../utils/useValidation";

const Profile = ({
  onLogout,
  onUpdate,
  userDataUpdateSuccessful,
  userDataUpdateFailed,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [buttonSubmitDisabled, setButtonSubmitDisabled] = useState(false);

  const profileData = {
    name: currentUser.name,
    email: currentUser.email,
  };

  const { values, handleChange, errors, isValid } = useValidation(profileData);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdate({ name: values.name, email: values.email });
  }

  useEffect(() => {
    setButtonSubmitDisabled(
      !isValid ||
        values.name === currentUser.name ||
        values.email === currentUser.email
    );
  }, [isValid, currentUser, values]);

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form className="profile__form" onSubmit={handleSubmit}>
        <label className="profile__label">
          Имя
          <input
            className="profile__input"
            type="text"
            name="name"
            minLength="2"
            maxLength="30"
            pattern="^[A-Za-zА-Яа-я-\s]+$"
            autoComplete="off"
            required
            value={values.name}
            onChange={handleChange}
          ></input>
          <span
            className={`profile__error ${
              errors.name ? "profile__error_visible" : "profile__error"
            }`}
          >
            {errors.name}
          </span>
        </label>
        <label className="profile__label">
          E-mail
          <input
            className="profile__input"
            type="email"
            name="email"
            required
            value={values.email}
            onChange={handleChange}
          ></input>
          <span
            className={`profile__error ${
              errors.email ? "profile__error_visible" : "profile__error"
            }`}
          >
            {errors.email}
          </span>
        </label>
        {userDataUpdateSuccessful ? (
          <span className="profile__message profile__message_succes">
            Профиль успешно обновлен
          </span>
        ) : (
          ""
        )}
        {userDataUpdateFailed ? (
          <span className="profile__message profile__message_failed">
            Ошибка при обновлении профиля
          </span>
        ) : (
          ""
        )}
        <button
          className={`profile__btn profile__btn_edit ${
            isValid ? "" : "profile__btn_edit_disabled"
          }`}
          type="submit"
          disabled={buttonSubmitDisabled}
        >
          Редактировать
        </button>
      </form>
      <button
        className="profile__btn profile__btn_logout"
        type="button"
        onClick={onLogout}
      >
        Выйти из аккаунта
      </button>
    </section>
  );
};

export default Profile;
