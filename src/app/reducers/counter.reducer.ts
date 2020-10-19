import {createReducer, on} from '@ngrx/store';
import {decrement, disabledDecrease, increment, reset, updatedAt} from './counter.action';
import {ICounterState} from './index';

export const initialState: ICounterState = {
  counter: 0,
  updatedAt: Date.now(),
  disabledDecrease: true
};

const COUNTER_REDUCER = createReducer(
  initialState,
  on(increment, state => ({
    ...state,
    counter: state.counter + 1
  })),
  on(decrement, state => ({
    ...state,
    counter: state.counter - 1
  })),
  on(reset, state => ({
    ...state,
    counter: 0
  })),
  on(updatedAt, (state, action) => ({
    ...state,
    updatedAt: action.payload.updatedAt
  })),
  on(disabledDecrease, state => ({
    ...state,
    get disabledDecrease(): boolean {
      return state.counter <= 0;
    }
  }))
);

export function counterReducer(state, action): ICounterState {
  return COUNTER_REDUCER(state, action);
}
