import { API_URLs, HttpUtil } from "../utils";
import { showLoader, showModal } from "./commonActions";
import { TEST_DISPATCH, GET_ERRORS } from "./types";

export const registerUser = (userData) => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};

export const loginUser = (data, header) => async (dispatch) => {
  dispatch(showLoader(true));
  HttpUtil.makePOST(API_URLs.LOGIN_USER_API_URL, data, header)
    .then((response) => {
      // if (response.success) {
      console.log("user logged in", response);
      if (response.success) {
        // Banner('Success', 'Record created successfully.', 'success');
        console.log("user logged in", response);
        dispatch(showModal(false));
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: response.data
        });
        console.log("user logged out", response);
        // displayWarning('Error', response.data.message, 'error', response);
      }
      return response;
    })
    .catch((err) => {
      console.log("Error", "Something went wrong.", err);
    })
  .finally(() => {
    dispatch(showLoader(false));
  });
};
