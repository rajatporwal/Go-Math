import { GET_ERRORS, IS_LOADING, SHOW_MODAL, TABLE_PROPS } from './types';

export const showLoader = (loading) => {
  return {
    type: IS_LOADING,
    payload: loading,
  };
};

export const showModal = (show) => {
  return {
    type: SHOW_MODAL,
    payload: show,
  };
};

export const setTableProps = (props) => {
  return {
    type: TABLE_PROPS,
    payload: props,
  };
};

export const setError = (errors) => {
  return {
    type: GET_ERRORS,
    payload: errors,
  };
};
