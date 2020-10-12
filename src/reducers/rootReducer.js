const initialState = {
  sideBar: false,
  showMenu: false,
  sideBarOptions: []
};

function rootReducer(state = initialState.sideBar, action) {
  switch (action.type) {
    case "SHOW_MENU":
      return { ...state, showMenu: action.value };
    case "SIDE_BAR":
      return { ...state, sideBar: action.value };
    case "SIDE_BAR_OPTIONS":
      return { ...state, sideBarOptions: action.value };
    default:
      return initialState;
  }
}

export default rootReducer;
