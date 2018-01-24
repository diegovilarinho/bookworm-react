import { USER_SIGN_UP } from '../types';
import api from '../api';
import { userLoggedIn } from "./auth";

// export const userSignup = user => ({
//   type: USER_SIGN_UP,
//   user
// });

export const signup = (data) => (dispatch) =>
  api.user.signup(data)
    .then(user => {
      localStorage.bookworkJWT = user.token;
      dispatch(userLoggedIn(user))
    });