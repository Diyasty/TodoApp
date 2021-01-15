import { User } from './../core/models/user.model';
import { Todo } from './../core/models/Todo.model';
export interface AppState {
  todos: Todo[];
  auth: User | null;
}

export const initialState: AppState = {
  todos: [
    {
      id: 1,
      title: 'test',
      description: 'test description',
      status: 'complete',
      owner: [
        {
          email: 'test@test.com',
          password: 'test',
        },
      ],
    },
  ],
  auth: null,
};
