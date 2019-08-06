import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputRxjsComponent } from './input-rxjs/input-rxjs.component';
import { MultipleObservableComponent } from './multiple-observable/multiple-observable.component';
import { CreateObservableComponent } from './create-observable/create-observable.component';
import { RetryRequestComponent } from './retry-request/retry-request.component';
import { RxjsSubjectComponent } from './rxjs-subject/rxjs-subject.component';
import { RxjsGameComponent } from './rxjs-game/rxjs-game.component';
import { RxjsSnakeComponent } from './rxjs-snake/rxjs-snake.component';

@NgModule({
  declarations: [
    AppComponent,
    InputRxjsComponent,
    MultipleObservableComponent,
    CreateObservableComponent,
    RetryRequestComponent,
    RxjsSubjectComponent,
    RxjsGameComponent,
    RxjsSnakeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
