import { Component, OnInit } from '@angular/core';
import { interval, throwError, of } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'retry-request',
  templateUrl: './retry-request.component.html',
  styleUrls: ['./retry-request.component.scss']
})
export class RetryRequestComponent implements OnInit {
  public page = 0;

  constructor() {}

  ngOnInit() {
    const githubUsers = `https://api.github.com/users?per_page=${this.page}`;
    const users = ajax(githubUsers);
    const example = users.pipe(
      mergeMap(val => {
        this.page++;
        if (this.page < 2) {
          return throwError('Error!');
        }
        return of(val);
      }),
      retry(2)
    );

    // const subscribe = example.subscribe({
    //   next: val => console.log(val),
    //   error: val => console.log(`${val}: Retried 2 times then quit!`)
    // });
  }
}
