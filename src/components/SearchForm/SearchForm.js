import "./SearchForm.css";

import { useState } from "react";

import searchIcon from "../../images/searchMovies/searchIcon.svg";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({ onSubmit, checked, onChecked }) => {
  const [searchText, setSearchText] = useState("");

  function handleInputChange(evt) {
    const target = evt.target;
    const value = target.value;
    setSearchText(value);
    console.log(searchText);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(searchText);
  }

  return (
    <section className="search">
      <form className="search__form" noValidate onSubmit={handleSubmit}>
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
            required
            value={searchText}
            onChange={handleInputChange}
          ></input>
          <button
            className="search__button"
            type="submit"
            title="Начать поиск"
          ></button>
        </div>
        <FilterCheckbox checked={checked} onChecked={onChecked} />
      </form>
    </section>
  );
};

export default SearchForm;
