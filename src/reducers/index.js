import { combineReducers } from "redux";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import errorReducer from "./errorReducer";
import todoReducer from "./todoReducer";

export default combineReducers({
  auth: authReducer,
  appReducer: appReducer,
  error: errorReducer,
  todo: todoReducer
});
