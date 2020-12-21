import { SET_TODO } from "../actions/types";

const initialState = {
  getTodos: [],
  addTodo: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TODO:
      return { ...state, getTodos: action.payload };
    default:
      return state;
  }
}
