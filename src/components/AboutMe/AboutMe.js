import "./AboutMe.css";
import photoStudent from "../../images/aboutMe/fotoStudenta.jpg";

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Павел</h3>
          <p className="about-me__profi">Фронтенд-разработчик, 26 лет</p>
          <p className="about-me__description">
            Живу в Тюмени, закончил факультет геофизики МГРИ РГГРУ по
            специальности "Геоинфромационные технологии". Поставил себе задачу
            стать крутым веб-разработчиком!
          </p>
          <a
            className="about-me__link"
            href="https://github.com/Pavel-Sitnikov"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img
          className="about-me__img"
          alt="Фотография студента"
          src={photoStudent}
        ></img>
      </div>
    </section>
  );
};

export default AboutMe;
