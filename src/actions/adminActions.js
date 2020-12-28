import Banner from '../common/notification/notification';
import { API_URLs, HttpUtil } from '../utils';
import { setError, showLoader } from './commonActions';
import { SET_USERS_LIST } from './types';

export const setUsers = (users) => {
  return {
    type: SET_USERS_LIST,
    payload: users,
  };
};

export const getUsersList = () => async (dispatch) => {
  dispatch(showLoader(true));
  HttpUtil.makeGET(`${API_URLs.ADMIN_API_URL}/users`)
    .then((res) => {
      if (res.success) {
        dispatch(setUsers(res.data));
        dispatch(setError({}));
        Banner('Success', 'Records Fetched Successfully');
      } else {
        dispatch(setError(res.data));
        Banner(
          'Something went wrong !!',
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

export const deleteUser = (id) => async (dispatch) => {
  dispatch(showLoader(true));
  HttpUtil.makeDELETE(`${API_URLs.ADMIN_API_URL}/users/${id}`)
    .then((res) => {
      if (res.success) {
        Banner('Success', res.data.message);
        dispatch(getUsersList());
      } else {
        Banner('Error', res.data.message || res.data, true);
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
