import "./App.css";

import { useState, useEffect } from "react";

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

function App() {
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [userDataUpdateSuccessful, setUserDataUpdateSuccessful] =
    useState(false);
  const [userDataUpdateFailed, setUserDataUpdateFailed] = useState(false);

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
          ></ProtectedRoute>
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
          ></ProtectedRoute>
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
        <Popup />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
