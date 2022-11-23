import { MOVIES_URL, HEADERS } from "./constants";

class MoviesApi {
  constructor(requestData) {
    this._url = requestData.MOVIES_URL;
    this._headers = requestData.HEADERS;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: "GET",
      headers: this.headers,
    }).then(this._checkResponse);
  }
}

export const moviesApi = new MoviesApi({ MOVIES_URL, HEADERS });
