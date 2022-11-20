import "./App.css";

import { useState, useEffect, useCallback } from "react";

import {
  Route,
  Switch,
  useHistory,
  Redirect,
  useLocation,
} from "react-router-dom";

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
  const [currentUser, setCurrentUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [moviesMarkedSaved, setMoviesMarkedSaved] = useState([]);
  const [processedMarkedSaved, setProcessedMarkedSaved] = useState([]);
  const [checkedShortMovies, setCheckedShortMovies] = useState(false);
  const [checkedSavedShortMovies, setCheckedSavedShortMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [userDataUpdateSuccessful, setUserDataUpdateSuccessful] =
    useState(false);
  const [userDataUpdateFailed, setUserDataUpdateFailed] = useState(false);
  const [failedRequest, setFailedRequest] = useState(false);
  const [noFoundMovies, setNoFoundMovies] = useState(false);
  const [noFoundSavedMovies, setNoFoundSavedMovies] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const history = useHistory();
  const location = useLocation();

  const pageWithSavedMovies =
    location.pathname === "/saved-movies" ? true : false;

  useEffect(() => {
    mainApi
      .getUserData()
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        setLoggedIn(false);
        setMovies([]);
        localStorage.clear();
        console.log(err);
      });
  }, [history]);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getSavedMovies()
        .then((res) => {
          setMoviesMarkedSaved(res);
        })
        .catch((err) => {
          setIsPopupOpen(true);
          console.log(err);
        });
    }
  }, [loggedIn]);

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
        setMovies([]);
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
        setIsPopupOpen(true);
        console.log(err);
      });
  }

  function handleSearchMovie(value) {
    if (movies.length === 0) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((res) => {
          localStorage.setItem("initial movies", JSON.stringify(res));
          filterMovies(value);
        })
        .catch((err) => {
          setFailedRequest(true);
          setIsPopupOpen(true);
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    }
    filterMovies(value);
  }

  const filterMovies = useCallback(
    (value) => {
      const initialMovies = JSON.parse(localStorage.getItem("initial movies"));
      if (initialMovies) {
        const filteredMovies = filteringMovies(
          initialMovies,
          value,
          checkedShortMovies
        );
        setMovies(filteredMovies);
        localStorage.setItem("filtered movies", JSON.stringify(filteredMovies));
        localStorage.setItem("input value", value);
        if (filteredMovies.length === 0 || null) {
          setNoFoundMovies(true);
        } else {
          setNoFoundMovies(false);
        }
      }
    },
    [checkedShortMovies]
  );

  function filtersSavedMovies(value) {
    const filteredMovies = filteringMovies(
      moviesMarkedSaved,
      value,
      checkedShortMovies
    );
    setProcessedMarkedSaved(filteredMovies);
    if (filteredMovies.length === 0 || null) {
      setNoFoundSavedMovies(true);
    } else {
      setNoFoundSavedMovies(false);
    }
  }

  const filtersSavedShortMovies = useCallback(() => {
    if (checkedSavedShortMovies) {
      const filtering = moviesMarkedSaved.filter((item) => item.duration <= 40);
      setProcessedMarkedSaved(filtering);
    } else {
      setProcessedMarkedSaved(moviesMarkedSaved);
    }
  }, [checkedSavedShortMovies, moviesMarkedSaved]);

  function handleCheckShortMovies() {
    setCheckedShortMovies(!checkedShortMovies);
    localStorage.setItem("checkbox", !checkedShortMovies);
  }

  function handdleCheckSavedShortMovies() {
    setCheckedSavedShortMovies(!checkedSavedShortMovies);
    localStorage.setItem("checkbox-saved", !checkedSavedShortMovies);
  }

  useEffect(() => {
    const checkbox = localStorage.getItem("checkbox");
    setCheckedShortMovies(JSON.parse(checkbox));

    const checkboxSaved = localStorage.getItem("checkbox-saved");
    setCheckedSavedShortMovies(JSON.parse(checkboxSaved));
  }, []);

  useEffect(() => {
    const storageInputValue = localStorage.getItem("input value");
    filterMovies(storageInputValue);
  }, [filterMovies, checkedShortMovies]);

  useEffect(() => {
    filtersSavedShortMovies();
  }, [filtersSavedShortMovies, checkedSavedShortMovies]);

  function handleToggleMarkerSave(data) {
    // проверить еще раз
    const saved = moviesMarkedSaved.some(
      (item) => data.movieId === item.movieId
    );

    if (!saved) {
      mainApi
        .addMovieToSaved(data)
        .then((res) => {
          setMoviesMarkedSaved([res, ...moviesMarkedSaved]);
        })
        .catch((err) => console.log(err));
    }

    if (saved) {
      const movie = moviesMarkedSaved.find(
        (item) => item.movieId === data.movieId
      );
      mainApi
        .deleteSavedMovie(movie)
        .then((res) => {
          setMoviesMarkedSaved(
            moviesMarkedSaved.filter((item) => item._id !== movie._id && res)
          );
        })
        .catch((err) => {
          setIsPopupOpen(true);
          console.log(err);
        });
    }
  }

  function handleRemoveMoviesMarkedSaved(data) {
    mainApi
      .deleteSavedMovie(data)
      .then((res) => {
        setMoviesMarkedSaved(
          moviesMarkedSaved.filter((item) => item._id !== data._id && res)
        );
      })
      .catch((err) => {
        setIsPopupOpen(true);
        console.log(err);
      });
  }

  useEffect(() => {
    if (!pageWithSavedMovies) {
      setProcessedMarkedSaved(moviesMarkedSaved);
      setNoFoundSavedMovies(false);
    }
  }, [pageWithSavedMovies, moviesMarkedSaved]);

  function popupClose() {
    setIsPopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            movies={movies}
            savedMovies={moviesMarkedSaved}
            onSubmit={handleSearchMovie}
            checked={checkedShortMovies}
            onChecked={handleCheckShortMovies}
            isLoading={isLoading}
            failedRequest={failedRequest}
            handleToggleMarkerSave={handleToggleMarkerSave}
            onUploadingMovies={noFoundMovies}
          ></ProtectedRoute>

          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            savedMovies={processedMarkedSaved}
            onSubmit={filtersSavedMovies}
            checked={checkedSavedShortMovies}
            onChecked={handdleCheckSavedShortMovies}
            onDeleteMovie={handleRemoveMoviesMarkedSaved}
            onUploadingMovies={noFoundSavedMovies}
            pageWithSavedMovies={pageWithSavedMovies}
          />

          <ProtectedRoute
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
        <Popup isOpen={isPopupOpen} onClose={popupClose} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
