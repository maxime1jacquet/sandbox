import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputRxjsComponent } from './input-rxjs/input-rxjs.component';
import { MultipleObservableComponent } from './multiple-observable/multiple-observable.component';
import { CreateObservableComponent } from './create-observable/create-observable.component';
import { RetryRequestComponent } from './retry-request/retry-request.component';
import { RxjsSubjectComponent } from './rxjs-subject/rxjs-subject.component';

@NgModule({
  declarations: [AppComponent, InputRxjsComponent, MultipleObservableComponent, CreateObservableComponent, RetryRequestComponent, RxjsSubjectComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
