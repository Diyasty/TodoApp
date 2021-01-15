import { ADD_TODO, EDIT_TODO, DELETE_TODO } from './../actions/todos.actions';
import { Action, createReducer, on, State } from '@ngrx/store';
import { initialState } from './../index';

const _todoReducer = createReducer(
  initialState,
  on(ADD_TODO, (state, action) => {
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          id: +state.todos.length + 1,
          title: action.title,
          description: action.description,
          status: false,
        },
      ],
    };
  }),
  on(EDIT_TODO, (state, action) => {
    console.log(action);

    const updatedTodo = state.todos.map((todo) => {
      console.log('>>>', todo.id === action.id ? action : todo);
      return todo.id === action.id ? action : todo;
    });
    console.log(updatedTodo);

    return {
      ...state,
      todos: updatedTodo,
    };
  }),

  // .filter((item, index) => {
  // return index !== itemIndex
  // })
  on(DELETE_TODO, (state, action) => {
    const updatedTodo = state.todos.filter((todo) => {
      console.log('>>>', todo.id === action.id ? action : todo);
      return todo.id !== action.id ? action : todo;
    });
    return {
      ...state,
      todos: updatedTodo,
    };
  })
);

export function TodoReducer(state: any | undefined, action: Action) {
  return _todoReducer(state, action);
}
