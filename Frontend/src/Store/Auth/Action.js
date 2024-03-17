import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";

import axios from "axios"

const api = "http://localhost:5000";

const token = localStorage.getItem("jwt");

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest);

  try {
    const response = await axios.post(`${api}/api/auth/signup`, userData);
    const user = response.userData;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    dispatch(registerSuccess(user.jwt));
  } catch (error) {
    dispatch(registerFailure(error));
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest);

  try {
    const response = await axios.post(`${api}/api/auth/signup`, userData);
    const user = response.userData;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    dispatch(loginSuccess(user.jwt));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export const getUser = (userData) => async (dispatch) => {
  dispatch(getUserRequest);

  try {
    const response = await axios.get(`${api}/api/users/profile/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = response.userData;

    dispatch(getUserSuccess(user.jwt));
  } catch (error) {
    dispatch(getUserFailure(error));
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: LOGOUT, payload: null });
};
