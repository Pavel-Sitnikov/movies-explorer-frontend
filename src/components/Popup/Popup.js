import "./Popup.css";

const Popup = () => {
  return (
    <div className="popup">
      <div className="popup__container">
        <p className="popup__message">Ошибка при выполнении запроса</p>
        <button className="popup__close" type="button">
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Popup;
