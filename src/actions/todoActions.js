import { ADD_TODO } from "./types"

export const setTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}