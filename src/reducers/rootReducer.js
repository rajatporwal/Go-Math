const initialState = {
  sideBar: false,
  sideBarOptions: [],
  isLoggedIn: false,
  userDetail: {},
  showModal: false
};

function rootReducer(state = initialState.sideBar, action) {
  switch (action.type) {
    case "SIDE_BAR":
      return { ...state, sideBar: action.value };
    case "SIDE_BAR_OPTIONS":
      return { ...state, sideBarOptions: action.value };
    case "SHOW_MODAL":
      return { ...state, showModal: action.value };
    case "IS_LOGGED_IN":
      return { ...state, isLoggedIn: action.value };
    case "USER_DETAIL":
      return { ...state, userDetail: action.value };
    default:
      return initialState;
  }
}

export default rootReducer;
