import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {decrement, increment, reset, updatedAt} from './counter.action';
import {catchError, map} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Injectable()
export class CounterEffects {
  updatedAt$ = createEffect(() => this.actions$.pipe(
    ofType(increment, decrement, reset),
    map(() => updatedAt({
      payload: {
        updatedAt: Date.now()
      }
    })),
    catchError(() => EMPTY)
  ));

  constructor(private actions$: Actions) {
  }
}


