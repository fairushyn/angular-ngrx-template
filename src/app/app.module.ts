import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';

import {counterReducer} from './reducers/counter.reducer';
import {MyCounterModule} from './my-counter/my-counter.module';
import {countKey} from './reducers';
import {CounterEffects} from './reducers/counter.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({[countKey]: counterReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([CounterEffects]),
    MyCounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
