import { SET_USERS_LIST } from "../actions/types";

const initialState = {
  usersList: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USERS_LIST:
      return { ...state, usersList: action.payload };
    default:
      return state;
  }
}
