import "./App.css";

import { useState, useEffect, useCallback } from "react";

import { Route, Switch, useHistory, Redirect } from "react-router-dom";

import ProtectedRoute from "../../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../context/CurrentUserContext";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Popup from "../Popup/Popup";

import { mainApi } from "../../utils/MainApi";
import * as auth from "../../utils/Auth";
import { moviesApi } from "../../utils/MoviesApi";
import filteringMovies from "../../utils/filtering";

function App() {
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [userDataUpdateSuccessful, setUserDataUpdateSuccessful] =
    useState(false);
  const [userDataUpdateFailed, setUserDataUpdateFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [checkedShortMovies, setCheckedShortMovies] = useState(false);
  const [isFailedRequest, setIsFailedRequest] = useState(false);
  const [isNoFoundMovies, setIsNoFoundMovies] = useState(false);

  useEffect(() => {
    mainApi
      .getUserData()
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        setLoggedIn(false);
        console.log(err);
      });
  }, [history]);

  function onLogin({ email, password }) {
    auth
      .authorize({ email, password })
      .then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
        setLoginError("");
        history.push("/movies");
      })
      .catch((err) => {
        setLoginError(err.message);
        console.log(err);
      });
  }

  function onRegister({ name, email, password }) {
    auth
      .register({ name, email, password })
      .then(() => {
        onLogin({ email, password });
        setRegisterError("");
      })
      .catch((err) => {
        setRegisterError(err.message);
        console.log(err);
      });
  }

  function onLogout() {
    return auth
      .logout()
      .then(() => {
        setLoggedIn(false);
        history.push("/");
        localStorage.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditProfile({ name, email }) {
    mainApi
      .editUserData({ name, email })
      .then((res) => {
        setCurrentUser(res);
        setUserDataUpdateSuccessful(true);
      })
      .catch((err) => {
        setUserDataUpdateFailed(true);
        console.log(err);
      });
  }

  const handleSearchMovie = (value) => {
    if (movies.length === 0) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((res) => {
          localStorage.setItem("Initial movies", JSON.stringify(res));
          filterMovies(value);
        })
        .catch((err) => {
          console.log(err);
          setIsFailedRequest(true);
        })
        .finally(() => setIsLoading(false));
    }
    filterMovies(value);
  };

  const filterMovies = useCallback(
    (value) => {
      const savedMovies = JSON.parse(localStorage.getItem("Initial movies"));
      if (savedMovies) {
        const filteredMovies = filteringMovies(
          savedMovies,
          value,
          checkedShortMovies
        );
        setMovies(filteredMovies);
        localStorage.setItem("Filtered movies", JSON.stringify(filteredMovies));
        localStorage.setItem("Input value", value);
        if (filteredMovies.length === 0 || null) {
          setIsNoFoundMovies(true);
        } else {
          setIsNoFoundMovies(false);
        }
      }
    },
    [checkedShortMovies]
  );

  const handleCheckShortMovies = () => {
    setCheckedShortMovies(!checkedShortMovies);
    localStorage.setItem("checkbox", !checkedShortMovies);
  };

  useEffect(() => {
    const checkbox = localStorage.getItem("checkbox");
    setCheckedShortMovies(JSON.parse(checkbox));
  }, []);

  useEffect(() => {
    const storageInputValue = localStorage.getItem("Input value");
    filterMovies(storageInputValue);
  }, [filterMovies, checkedShortMovies]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            movies={movies}
            onSubmit={handleSearchMovie}
            checked={checkedShortMovies}
            onChecked={handleCheckShortMovies}
            isLoading={isLoading}
            isFailedRequest={isFailedRequest}
            onUploadingMovies={isNoFoundMovies}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onLogout={onLogout}
            onUpdate={handleEditProfile}
            userDataUpdateSuccessful={userDataUpdateSuccessful}
            userDataUpdateFailed={userDataUpdateFailed}
          ></ProtectedRoute>
          <Route path="/signup">
            <Register
              onRegister={onRegister}
              registerError={registerError}
              setRegisterError={setRegisterError}
            />
            {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signup" />}
          </Route>
          <Route path="/signin">
            <Login
              onLogin={onLogin}
              loginError={loginError}
              setLoginError={setLoginError}
            />
            {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" />}
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
        <Popup />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
