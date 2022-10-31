import "./Profile.css";

const Profile = () => {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form">
        <label className="profile__label">
          Имя
          <input
            className="profile__input"
            type="text"
            name="name"
            placeholder="Виталий"
            required
          ></input>
        </label>
        <label className="profile__label">
          E-mail
          <input
            className="profile__input"
            type="text"
            name="email"
            placeholder="pochta@yandex.ru"
            required
          ></input>
        </label>
        <button className="profile__btn profile__btn_edit" type="button">
          Редактировать
        </button>
        <button className="profile__btn profile__btn_logout" type="button">
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
};

export default Profile;
