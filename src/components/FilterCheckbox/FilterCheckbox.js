import "./FilterCheckbox.css";

const FilterCheckbox = ({ checked, onChecked }) => {
  return (
    <div className="switcher">
      <label className="switcher__label">
        <input
          className="switcher__input"
          type="checkbox"
          name="short"
          onChange={onChecked}
          checked={checked}
        ></input>
        <span className="switcher__status"></span>
      </label>
      <p className="switcher__name">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
