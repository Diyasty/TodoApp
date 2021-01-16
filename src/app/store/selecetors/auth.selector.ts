import { AppState } from 'src/app/store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAuthFeature = createFeatureSelector<AppState>('auth');

export const selectFeatureAuth = createSelector(selectAuthFeature, (state) =>
  state.auth ? true : false
);
