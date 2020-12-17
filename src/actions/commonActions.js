import { IS_LOADING, SHOW_MODAL } from "./types";

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