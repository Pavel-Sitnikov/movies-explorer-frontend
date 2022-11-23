import "./Popup.css";

const Popup = ({ isOpen, onClose }) => {
  return (
    <div className={`popup ${isOpen && "popup__opened"}`}>
      <div className="popup__container">
        <p className="popup__message">Ошибка при выполнении запроса</p>
        <button className="popup__close" type="button" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Popup;
