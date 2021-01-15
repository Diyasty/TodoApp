import { createSelector } from '@ngrx/store';

export const selectFeature = (state: any) => state.todos;

export const selectFeatureTodos = createSelector(
  selectFeature,
  (state) => state
);
