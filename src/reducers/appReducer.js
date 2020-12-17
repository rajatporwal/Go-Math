import {
  IS_LOGGED_IN,
  SHOW_MODAL,
  SIDE_BAR,
  SIDE_BAR_OPTIONS,
  USER_DETAIL
} from "../actions/types";

const initialState = {
  sideBar: false,
  sideBarOptions: [],
  isLoggedIn: false,
  userDetail: {},
  showModal: false
};

function appReducer(state = initialState, action) {
  console.log('action', action);
  switch (action.type) {
    case SIDE_BAR:
      return { ...state, sideBar: action.value };
    case SIDE_BAR_OPTIONS:
      return { ...state, sideBarOptions: action.value };
    case SHOW_MODAL:
      {
        console.log('showwww ke andr')
        return { ...state, showModal: action.value };
      }
    case IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.value };
    case USER_DETAIL:
      return { ...state, userDetail: action.value };
    default:
        return state;
  }
}

export default appReducer;
