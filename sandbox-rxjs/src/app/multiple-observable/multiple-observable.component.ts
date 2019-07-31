import { Component, OnInit } from '@angular/core';
import { Observable, of, interval, merge, timer, combineLatest } from 'rxjs';
import { mergeMap, tap, concatMap, mapTo } from 'rxjs/operators';

@Component({
  selector: 'multiple-observable',
  templateUrl: './multiple-observable.component.html',
  styleUrls: ['./multiple-observable.component.scss']
})
export class MultipleObservableComponent implements OnInit {
  public combineObservable: string;

  constructor() {}

  ngOnInit() {
    // timerOne emits first value at 1s, then once every 4s
    const timerOne$ = timer(1000, 4000);
    const timerTwo$ = timer(2000, 4000);
    const timerThree$ = timer(3000, 4000);

    // when one timer emits, emit the latest values from each timer as an array
    combineLatest(timerOne$, timerTwo$, timerThree$).subscribe(
      ([timerValOne, timerValTwo, timerValThree]) => {
        this.combineObservable = `${timerValOne},${timerValTwo},${timerValThree}`;
      }
    );
  }
}
