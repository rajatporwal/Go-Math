import React from 'react';
import { Button } from "antd";
import Banner from "../common/notification/notification";
import { API_URLs, HttpUtil } from "../utils";
import { clearError, setError, showLoader, showModal } from "./commonActions";

export const registerUser = (data, header) => async (dispatch) => {
  dispatch(showLoader(true));
  HttpUtil.makePOST(API_URLs.REGISTER_USER_API_URL, data, header)
    .then((response) => {
      if (response.success) {
        dispatch(showModal(false));
        dispatch(clearError());
        Banner('Success', 'User registerd successfully. Please login.');
        dispatch(showModal(true));
      } else {
        dispatch(setError(response.data));
        Banner('Registration Failed', JSON.stringify(response.data || response.message), true);
      }
      return response;
    })
    .catch((err) => {
      Banner("Error", err ? JSON.stringify(err) : "Something went wrong, please try again", true);
      console.log("Error", "Something went wrong.", err);
    })
  .finally(() => {
    dispatch(showLoader(false));
  });
};

export const loginUser = (data, header) => async (dispatch) => {
  dispatch(showLoader(true));
  HttpUtil.makePOST(API_URLs.LOGIN_USER_API_URL, data, header)
    .then((response) => {
      if (response.success) {
        dispatch(showModal(false));
        dispatch(clearError());
        Banner('Success', 'Login Successfull');
      } else {
        dispatch(setError(response.data));
        Banner('Login Failed', JSON.stringify(response.data || response.message), true);
      }
      return response;
    })
    .catch((err) => {
      Banner("Error", err ? JSON.stringify(err) : "Something went wrong, please try again", true);
      console.log("Error", "Something went wrong.", err);
    })
  .finally(() => {
    dispatch(showLoader(false));
  });
};
