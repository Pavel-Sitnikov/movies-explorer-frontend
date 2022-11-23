import { BASE_URL, HEADERS } from "./constants";

class MainApi {
  constructor(requestData) {
    this._url = requestData.BASE_URL;
    this._headers = requestData.HEADERS;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getUserData() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse);
  }

  editUserData({ name, email }) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({ name, email }),
    }).then(this._checkResponse);
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse);
  }

  addMovieToSaved(data) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  deleteSavedMovie(data) {
    return fetch(`${this._url}/movies/${data._id}`, {
      method: "DELETE",
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse);
  }
}

export const mainApi = new MainApi({ BASE_URL, HEADERS });
