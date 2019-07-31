import { Component, OnInit } from '@angular/core';
import { from, interval, of, range, throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, retry } from 'rxjs/operators';

@Component({
  selector: 'create-observable',
  templateUrl: './create-observable.component.html',
  styleUrls: ['./create-observable.component.scss']
})
export class CreateObservableComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // ----------------- AJAX
    const githubUsers = `https://api.github.com/users?per_page=2`;
    const users = ajax(githubUsers);
    // const subscribe = users.subscribe(
    //   res => console.log(res),
    //   err => console.error(err)
    // );

    // ----------------- FROM
    const arraySource = from([1, 2, 3, 4, 5]);
    // const subscribeé = arraySource.subscribe(val => console.log(val));

    // ----------------- INTERVAL
    const sourcee = interval(1000);
    // const subscribe = sourcee.subscribe(val => console.log(val));

    // ----------------- OF
    const oaff = of('toto');

    // ----------------- RANGE
    const sourceE = range(1, 100);
    // const example = sourceE.subscribe(val => console.log(val));
  }
}
