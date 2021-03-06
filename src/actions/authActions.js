import Banner from '../common/notification/notification';
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER } from '../actions/types';
import { API_URLs, HttpUtil } from '../utils';
import setAuthToken from '../utils/setAuthToken';
import { setError, showLoader, showModal } from './commonActions';

export const registerUser = (data) => async (dispatch) => {
  dispatch(showLoader(true));
  HttpUtil.makePOST(API_URLs.REGISTER_USER_API_URL, data)
    .then((res) => {
      if (res.success) {
        dispatch(showModal(false));
        dispatch(setError({}));
        Banner('Success', 'User registerd successfully. Please login.');
        dispatch(showModal(true));
      } else {
        dispatch(setError(res.data));
        Banner(
          'Registration Failed',
          JSON.stringify(res.data || res.message),
          true
        );
      }
      return res;
    })
    .catch((err) => {
      Banner(
        'Error',
        err ? JSON.stringify(err) : 'Something went wrong, please try again',
        true
      );
    })
    .finally(() => {
      dispatch(showLoader(false));
    });
};

export const loginUser = (data) => async (dispatch) => {
  dispatch(showLoader(true));
  HttpUtil.makePOST(API_URLs.LOGIN_USER_API_URL, data)
    .then((res) => {
      if (res.success) {
        dispatch(showModal(false));
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));

        dispatch(setError({}));
        Banner('Success', 'Login Successfull');
      } else {
        dispatch(setError(res.data));
        Banner('Login Failed', JSON.stringify(res.data || res.message), true);
      }
      return res;
    })
    .catch((err) => {
      Banner(
        'Error',
        err ? JSON.stringify(err) : 'Something went wrong, please try again',
        true
      );
    })
    .finally(() => {
      dispatch(showLoader(false));
    });
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  dispatch(showLoader(true));
  setTimeout(function () {
    dispatch(showLoader(false));
  }, 500);
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  Banner('Success', 'Logged Out Successfully');
};
