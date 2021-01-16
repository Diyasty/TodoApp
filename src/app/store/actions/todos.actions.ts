import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/core/models/Todo.model';

export enum Actions {
  'ADD_TODO' = '[todos] Add todo',
  'EDIT_TODO' = '[todos] Edit todo',
  'DELETE_TODO' = '[todos] Delete todo',
}

export const ADD_TODO = createAction(Actions.ADD_TODO, props<Todo>());
export const EDIT_TODO = createAction(Actions.EDIT_TODO, props<Todo>());
export const DELETE_TODO = createAction(
  Actions.DELETE_TODO,
  props<{ id: any }>()
);
