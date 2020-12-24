import { combineReducers } from "redux";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import errorReducer from "./errorReducer";
import todoReducer from "./todoReducer";
import adminReducer from "./adminReducer";

export default combineReducers({
  auth: authReducer,
  appReducer: appReducer,
  error: errorReducer,
  todo: todoReducer,
  admin: adminReducer,
});
