import Banner from "../common/notification/notification";
import { API_URLs, HttpUtil } from "../utils";
import { clearError, setError, showLoader } from "./commonActions";
import { SET_TODO } from "./types";

export const setTodo = (todo) => {
  return {
    type: SET_TODO,
    payload: todo
  };
};

export const addTodo = (data) => async (dispatch) => {
  dispatch(showLoader(true));
  setTimeout(function () {
    dispatch(showLoader(false));
  }, 500);
  HttpUtil.makePOST(API_URLs.TODO_API_URL, data)
    .then((res) => {
      console.log("res", res);
      if (res.success) {
        Banner("Success", res.data.message);
      } else {
        Banner("Success", res.data.message || res.data);
      }
      return res;
    })
    .catch((err) => {
      Banner(
        "Error",
        err ? JSON.stringify(err) : "Something went wrong, please try again",
        true
      );
    });
};

export const getTodos = () => async (dispatch) => {
  dispatch(showLoader(true));
  HttpUtil.makeGET(API_URLs.TODO_API_URL)
    .then((res) => {
      if (res.success) {
        dispatch(setTodo(res.data.todos));
        dispatch(clearError());
        Banner("Success", "Records Fetched Successfully");
      } else {
        dispatch(setError(res.data));
        Banner(
          "Something went wrong !!",
          JSON.stringify(res.data || res.message),
          true
        );
      }
      return res;
    })
    .catch((err) => {
      Banner(
        "Error",
        err ? JSON.stringify(err) : "Something went wrong, please try again",
        true
      );
      console.log("Error", "Something went wrong.", err);
    })
    .finally(() => {
      dispatch(showLoader(false));
    });
};
