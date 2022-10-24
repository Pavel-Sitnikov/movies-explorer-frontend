import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__info">
        <ul className="about-project__list">
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
      </div>
      <div className="about-project__timeline">
        <ul className="about-project__list">
          <li className="about-project__item about-project__item_beckend">
            <h4 className="about-project__week about-project__week_backend">
              1 неделя
            </h4>
            <p className="about-project__tech">Back-end</p>
          </li>
          <li className="about-project__item about-project__item_frontend">
            <h4 className="about-project__week about-project__week_frontend">
              4 недели
            </h4>
            <p className="about-project__tech">Front-end</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutProject;
