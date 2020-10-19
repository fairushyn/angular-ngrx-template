import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as countActions from './counter.action';
import {catchError, map} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Injectable()
export class CounterEffects {
  updatedAt$ = createEffect(() => this.actions$.pipe(
    ofType(countActions.increment, countActions.decrement, countActions.reset),
    map(() => countActions.updatedAt({
      payload: {
        updatedAt: Date.now()
      }
    })),
    catchError(() => EMPTY)
  ));

  disabledDecrease$ = createEffect(() => this.actions$.pipe(
    ofType(countActions.increment, countActions.decrement, countActions.reset),
    map(() => countActions.disabledDecrease()),
    catchError(() => EMPTY)
  ));

  constructor(private actions$: Actions) {
  }
}



