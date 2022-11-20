const BASE_URL = "https://api.diplom-pavel.nomoredomains.icu";
const MOVIES_URL = "https://api.nomoreparties.co";
const HEADERS = {
  "Content-Type": "application/json",
};

const REGEX = /[A-Za-zА-Яа-яЁё-\s]+$/;

const PATHNAME_FOR_HEADER = ["/", "/movies", "/saved-movies", "/profile"];

const PATHNAME_FOR_FOOTER = ["/", "/movies", "/saved-movies"];

const MAX_WINDOW_WIDTH = 1280;
const MEDIUM_WINDOW_WIDTH = 768;
const MIN_WINDOW_WIDTH = 320;

const MAX_RENDER_MOVIES = 12;
const MEDIUM_RENDER_MOVIES = 8;
const MIN_RENDER_MOVIES = 5;

const MAX_ADD_NUMBER_OF_MOVIES = 3;
const MIN_ADD_NUMBER_OF_MOVIES = 2;

const LOADMORE = 3;

export {
  BASE_URL,
  MOVIES_URL,
  HEADERS,
  REGEX,
  PATHNAME_FOR_HEADER,
  PATHNAME_FOR_FOOTER,
  MAX_WINDOW_WIDTH,
  MEDIUM_WINDOW_WIDTH,
  MIN_WINDOW_WIDTH,
  MAX_RENDER_MOVIES,
  MEDIUM_RENDER_MOVIES,
  MIN_RENDER_MOVIES,
  MAX_ADD_NUMBER_OF_MOVIES,
  MIN_ADD_NUMBER_OF_MOVIES,
  LOADMORE,
};
