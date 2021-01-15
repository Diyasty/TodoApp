import { TodoReducer } from './reducers/todos.reducer';
import { userReducer } from './reducers/user.reducer';

export const reducers = {
  todos: TodoReducer,
  auth: userReducer,
};
