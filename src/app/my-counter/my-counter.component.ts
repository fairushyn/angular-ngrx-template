import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as countActions from '../reducers/counter.action';
import {IAppState, selectCounter, selectDisabledDecrease, selectUpdatedAt} from '../reducers';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyCounterComponent implements OnInit {
  public counter$: Observable<number>;
  public updatedAt$: Observable<number>;
  public disabledDecrease$: Observable<boolean> ;

  constructor(private store$: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.counter$ = this.store$.pipe(select(selectCounter));
    this.updatedAt$ = this.store$.pipe(select(selectUpdatedAt));
    this.disabledDecrease$ = this.store$.pipe(select(selectDisabledDecrease));
  }

  public increment(): void {
    this.store$.dispatch(countActions.increment());
  }

  public decrement(): void {
    this.store$.dispatch(countActions.decrement());
  }

  public reset(): void {
    this.store$.dispatch(countActions.reset());
  }
}
