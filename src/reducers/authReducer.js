import isEmpty from "../validation/is-empty";
import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  isAdmin: false,
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        isAdmin: action.payload.userRole ? action.payload.userRole.includes('admin') : false,
        user: action.payload
      };
    default:
      return state;
  }
}
