import { ADD_TODO, TOGGLE_TODO, PURGE_TODO } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const purgeTodo = () => ({
  type: PURGE_TODO,
  payload: {}
});
