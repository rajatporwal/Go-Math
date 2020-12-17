import {
  IS_LOGGED_IN,
  IS_LOADING,
  SHOW_MODAL,
  SIDE_BAR,
  SIDE_BAR_OPTIONS,
  USER_DETAIL
} from "../actions/types";

const initialState = {
  sideBar: false,
  sideBarOptions: [],
  isLoading: false,
  isLoggedIn: false,
  userDetail: {},
  showModal: false
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SIDE_BAR:
      return { ...state, sideBar: action.value };
    case SIDE_BAR_OPTIONS:
      return { ...state, sideBarOptions: action.value };
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SHOW_MODAL:
      return { ...state, showModal: action.payload };
    case IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.value };
    case USER_DETAIL:
      return { ...state, userDetail: action.value };
    default:
      return state;
  }
}

export default appReducer;
