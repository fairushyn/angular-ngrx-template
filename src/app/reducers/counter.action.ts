import {createAction, props} from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const updatedAt = createAction(
  '[Counter Component] Updated At',
  props<{ payload: { updatedAt: number } }>()
);
export const disabledDecrease = createAction('[Counter Component] is disabled decrease');
