import movie1 from "../images/MaketMovies/1_pic.png";
import movie2 from "../images/MaketMovies/2_pic.png";
import movie3 from "../images/MaketMovies/3_pic.png";
import movie4 from "../images/MaketMovies/4_pic.png";

const BASE_URL = "https://api.diplom-pavel.nomoredomains.icu";
const MOVIES_URL = "https://api.nomoreparties.co";
const HEADERS = {
  "Content-Type": "application/json",
};

const REGEX = /[A-Za-zА-Яа-яЁё-\s]+$/;

const PATHNAME_FOR_HEADER = ["/", "/movies", "/saved-movies", "/profile"];

const PATHNAME_FOR_FOOTER = ["/", "/movies", "/saved-movies"];

const MAX_WINDOW_WIDTH = 1280;
const MEDIUM_WINDOW_WIDTH = 678;
const MIN_WINDOW_WIDTH = 567;

const MAX_RENDER_MOVIES = 12;
const MEDIUM_RENDER_MOVIES = 8;
const MIN_RENDER_MOVIES = 5;

const MAX_ADD_NUMBER_OF_MOVIES = 3;
const MIN_ADD_NUMBER_OF_MOVIES = 2;

const LOADMORE_NUMBER = 3;

export const movies = [
  {
    id: 1,
    name: "33 слова о дизайне",
    duration: "1ч 17м",
    image: movie1,
  },
  {
    id: 2,
    name: "Киноальманах «100 лет дизайна»",
    duration: "1ч42м",
    image: movie2,
  },
  {
    id: 3,
    name: "В погоне за Бенкси",
    duration: "1ч 17м",
    image: movie3,
  },
  {
    id: 4,
    name: "Баския: Взрыв реальности",
    duration: "1ч 17м",
    image: movie1,
  },
  {
    id: 5,
    name: "Бег это свобода",
    duration: "1ч 17м",
    image: movie1,
  },
  {
    id: 6,
    name: "Книготорговцы",
    duration: "1ч 17м",
    image: movie1,
  },
  {
    id: 7,
    name: "Когда я думаю о Германии ночью",
    duration: "1ч 17м",
    image: movie1,
  },
  {
    id: 8,
    name: "Gimme Danger: История Игги и The Stooges",
    duration: "1ч 17м",
    image: movie1,
  },
  {
    id: 9,
    name: "Дженис: Маленькая девочка грустит",
    duration: "1ч 17м",
    image: movie1,
  },
  {
    id: 10,
    name: "Соберись перед прыжком",
    duration: "1ч 17м",
    image: movie1,
  },
  {
    id: 11,
    name: "Пи Джей Харви: A dog called money",
    duration: "1ч 17м",
    image: movie4,
  },
  {
    id: 12,
    name: "По волнам: Искусство звука в кино",
    duration: "1ч 17м",
    image: movie1,
  },
];

export const savedMovies = [
  {
    id: 1,
    name: "33 слова о дизайне",
    duration: "1ч 17м",
    image: movie1,
  },
  {
    id: 2,
    name: "Киноальманах «100 лет дизайна»",
    duration: "1ч 17м",
    image: movie2,
  },
  {
    id: 3,
    name: "В погоне за Бенкси",
    duration: "1ч 17м",
    image: movie3,
  },
];

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
  LOADMORE_NUMBER,
};
