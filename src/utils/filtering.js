const moviesFilters = (movies, value, shotrMovies) => {
  function filterMoviesByName(item) {
    return JSON.stringify(item.nameRU)
      .toLowerCase()
      .includes(value.toLowerCase());
  }

  const filteringByShortMovies = (item) => {
    return item.duration <= 40;
  };

  if (shotrMovies) {
    return movies.filter(filteringByShortMovies).filter(filterMoviesByName);
  } else {
    return movies.filter(filterMoviesByName);
  }
};

export default moviesFilters;
