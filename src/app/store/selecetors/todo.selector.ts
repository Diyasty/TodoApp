import { AppState } from 'src/app/store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectTodosFeature = createFeatureSelector<AppState>('todos');

export const selectFeatureTodos = createSelector(
  selectTodosFeature,
  (state) => state.todos
);
