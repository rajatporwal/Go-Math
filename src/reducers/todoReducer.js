import { ADD_TODO } from "../actions/types";

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
        return [...state, action.payload];
    default:
      return state;
  }
}
