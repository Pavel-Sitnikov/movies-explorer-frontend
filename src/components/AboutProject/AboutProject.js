import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__info">
        <li className="about-project__item">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__item">
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="about-project__timeline">
        <li className="about-project__week">
          <p className="about-project__time about-project__time_backend">
            1 неделя
          </p>
          <p className="about-project__tech">Back-end</p>
        </li>
        <li className="about-project__week">
          <p className="about-project__time about-project__time_frontend">
            4 недели
          </p>
          <p className="about-project__tech">Front-end</p>
        </li>
      </ul>
    </section>
  );
};

export default AboutProject;
