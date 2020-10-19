import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as countActions from '../reducers/counter.action';
import {IAppState, selectCounter, selectDisabledDecrease, selectUpdatedAt} from '../reducers';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {
  counter$: Observable<number>;
  updatedAt$: Observable<number>;
  disabledDecrease$: Observable<boolean> ;

  constructor(private store$: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.counter$ = this.store$.pipe(select(selectCounter));
    this.updatedAt$ = this.store$.pipe(select(selectUpdatedAt));
    this.disabledDecrease$ = this.store$.pipe(select(selectDisabledDecrease));
  }

  increment(): void {
    this.store$.dispatch(countActions.increment());
    this.store$.dispatch(countActions.disabledDecrease());
  }

  decrement(): void {
    this.store$.dispatch(countActions.decrement());
    this.store$.dispatch(countActions.disabledDecrease());
  }

  reset(): void {
    this.store$.dispatch(countActions.reset());
    this.store$.dispatch(countActions.disabledDecrease());
  }
}
