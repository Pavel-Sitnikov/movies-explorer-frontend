import "./FilterCheckbox.css";

const FilterCheckbox = () => {
  return (
    <div className="switcher">
      <label className="switcher__label">
        <input className="switcher__input" type="checkbox" name="short"></input>
        <span className="switcher__status"></span>
      </label>
      <p className="switcher__name">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
