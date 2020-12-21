import { CLEAR_ERROR, GET_ERRORS, IS_LOADING, SHOW_MODAL } from "./types";

export const showLoader = (loading) => {
  return {
    type: IS_LOADING,
    payload: loading
  };
};

export const showModal = (show) => {
  return {
    type: SHOW_MODAL,
    payload: show
  };
};

export const setError = (errors) => {
  return {
    type: GET_ERRORS,
    payload: errors
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
    payload: {}
  };
};
