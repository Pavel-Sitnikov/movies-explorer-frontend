import "./SearchForm.css";

import searchIcon from "../../images/searchMovies/searchIcon.svg";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__container">
          <img
            className="search__icon"
            src={searchIcon}
            alt="Иконка поиска"
          ></img>
          <input
            className="search__input"
            placeholder="Фильм"
            name="Film"
            type="text"
          ></input>
          <button
            className="search__button"
            type="submit"
            title="Начать поиск"
          ></button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
};

export default SearchForm;
