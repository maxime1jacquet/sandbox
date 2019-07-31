import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { tap, debounceTime, pluck, filter } from 'rxjs/operators';

@Component({
  selector: 'input-rxjs',
  templateUrl: './input-rxjs.component.html',
  styleUrls: ['./input-rxjs.component.scss']
})
export class InputRxjsComponent implements OnInit {
  @ViewChild('inputRx') inputRx;

  public input$: Observable<any>;
  public limit = 20;
  public current = 0;
  public str: string;

  constructor() {}

  ngOnInit() {
    this.input$ = fromEvent(this.inputRx.nativeElement, 'keyup');

    this.input$
      .pipe(
        pluck('srcElement', 'value'),
        tap((value: string) => (this.current = value.length)),
        filter(_ => this.current < this.limit),
        debounceTime(250),
        tap((el: string) => (this.str = el))
      )
      .subscribe();
  }
}
