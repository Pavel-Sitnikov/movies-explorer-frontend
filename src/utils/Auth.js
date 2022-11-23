import { BASE_URL } from "./constants";

const checkResponse = (res) =>
  res.ok
    ? res.json()
    : Promise.reject(new Error(`Ошибка ${res.status}: ${res.statusText}`));

export function register({ name, password, email }) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password, email }),
  }).then((res) => checkResponse(res));
}

export function authorize({ email, password }) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  }).then((res) => checkResponse(res));
}

export function logout() {
  return fetch(`${BASE_URL}/signout`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((res) => checkResponse(res));
}
