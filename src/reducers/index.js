import { combineReducers } from "redux";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  appReducer: appReducer,
  error: errorReducer
});
