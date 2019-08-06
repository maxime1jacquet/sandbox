import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { startWith, map, tap, pluck, filter } from 'rxjs/operators';

@Component({
  selector: 'rxjs-snake',
  templateUrl: './rxjs-snake.component.html',
  styleUrls: ['./rxjs-snake.component.scss']
})
export class RxjsSnakeComponent implements OnInit {
  public snake = document.getElementById('snake');
  public direction = 0; // 0 1 2 3
  public position = [0, 0];

  constructor() {}

  ngOnInit() {
    const keys$ = fromEvent(document, 'keydown').pipe(
      pluck('key'),
      map((key: string) => {
        console.log(key);
        if (key === 'ArrowDown') {
          this.direction = 0;
        }
        if (key === 'ArrowUp') {
          this.direction = 1;
        }
        if (key === 'ArrowLeft') {
          this.direction = 2;
        }
        if (key === 'ArrowRight') {
          this.direction = 3;
        }
        if (key === ' ') {
          this.direction = 4;
        }
      })
    );

    keys$.subscribe();

    const snake$ = interval(100).pipe(
      filter(
        _ =>
          this.position[0] >= 0 &&
          this.position[1] >= 0 &&
          this.position[0] <= 50 &&
          this.position[1] <= 50
      ),
      map(_ => this.position),
      tap((cp: number[]) => {
        if (this.direction === 3) {
          const oneMore = cp[1] + 1;
          this.position = [cp[0], oneMore];
        }
        if (this.direction === 2) {
          const oneMore = cp[1] - 1;
          this.position = [cp[0], oneMore];
        }
        if (this.direction === 1) {
          const oneMore = cp[0] - 1;
          this.position = [oneMore, cp[1]];
        }
        if (this.direction === 0) {
          const oneMore = cp[0] + 1;
          this.position = [oneMore, cp[1]];
        }
        // console.log(this.position);
      }),

      tap(_ => {
        document.getElementById('snake').style.left =
          this.position[1] * 1 + 'px';
        document.getElementById('snake').style.top =
          this.position[0] * 1 + 'px';
      })
    );

    snake$.subscribe();
  }
}
