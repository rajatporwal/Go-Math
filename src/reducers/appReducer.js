import {
  IS_LOADING,
  SHOW_MODAL,
  SIDE_BAR,
  SIDE_BAR_OPTIONS,
  TABLE_PROPS
} from "../actions/types";

const initialState = {
  sideBar: false,
  sideBarOptions: [],
  isLoading: false,
  isLoggedIn: false,
  userDetail: {},
  showModal: false,
  tableProps: {
    showIndex: false,
    showBorder: false,
  }
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
    case TABLE_PROPS:
      return { ...state, tableProps: action.payload };
    default:
      return state;
  }
}

export default appReducer;
