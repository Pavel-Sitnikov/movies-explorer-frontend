import "./PageNotFound.css";

import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();

  return (
    <div className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__message">Страница не найдена</p>
      </div>
      <button className="not-found__btn" onClick={() => history.go(-1)}>
        Назад
      </button>
    </div>
  );
};

export default PageNotFound;
