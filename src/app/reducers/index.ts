import {createFeatureSelector, createSelector} from '@ngrx/store';

export const countKey = 'count';

export interface ICounterState {
  counter: number;
  updatedAt: number;
}

export interface IAppState {
  [countKey]: ICounterState;
}

export const selectCountFeature = createFeatureSelector<IAppState, ICounterState>(countKey);

export const selectCounter = createSelector(
  selectCountFeature,
  (state: ICounterState) => state.counter
);

export const selectUpdatedAt = createSelector(
  selectCountFeature,
  (state: ICounterState) => state.updatedAt
);
