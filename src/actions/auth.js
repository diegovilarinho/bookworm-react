import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_SIGN_UP } from '../types';
import api from '../api';

export const userSignup = user => ({
  type: USER_SIGN_UP,
  user
});

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const signup = (data) => (dispatch) =>
  api.user.signup(data)
    .then(user => {
      dispatch(userSignup(user))
    });

export const login = (credentials) => (dispatch) =>
  api.user.login(credentials)
    .then(user => {
      localStorage.bookworkJWT = user.token;
      dispatch(userLoggedIn(user))
    });

export const logout = () => (dispatch) => {
  localStorage.removeItem('bookworkJWT');
  dispatch(userLoggedOut())
};