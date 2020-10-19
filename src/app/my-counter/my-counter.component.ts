import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {decrement, increment, reset} from '../reducers/counter.action';
import {IAppState, selectCounter, selectUpdatedAt} from '../reducers';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {
  counter$: Observable<number>;
  updatedAt$: Observable<number>;
  disabledDecrease$: Observable<boolean> ;

  constructor(public readonly store$: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.counter$ = this.store$.pipe(select(selectCounter));
    this.updatedAt$ = this.store$.pipe(select(selectUpdatedAt));
    this.disabledDecrease$ = this.counter$.pipe(map(count => count <= 0));
  }

  increment(): void {
    this.store$.dispatch(increment());
  }

  decrement(): void {
    this.store$.dispatch(decrement());
  }

  reset(): void {
    this.store$.dispatch(reset());
  }
}
