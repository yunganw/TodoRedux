import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return [
        ...state,
        {
          id,
          content,
          completed: false
        }
      ];
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return state.map(todo =>
          (todo.id === id)
              ? {...todo, completed: !todo.completed}
              : todo
      );
    }
    default:
      return state;
  }
}
