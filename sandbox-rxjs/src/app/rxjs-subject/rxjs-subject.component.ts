import { Component, OnInit } from '@angular/core';

import { AsyncSubject, BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'rxjs-subject',
  templateUrl: './rxjs-subject.component.html',
  styleUrls: ['./rxjs-subject.component.scss']
})
export class RxjsSubjectComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // this.asyncSubject();
    this.behaviorSubject();
    // this.subject();
  }

  public asyncSubject() {
    const sub = new AsyncSubject();
    sub.subscribe(console.log);
    sub.next(123); //nothing logged
    sub.subscribe(console.log);
    sub.next(456); //nothing logged
    sub.complete(); //456, 456 logged by both subscribers
  }

  public behaviorSubject() {
    const subject = new BehaviorSubject(123);

    //two new subscribers will get initial value => output: 123, 123
    subject.subscribe(console.log);
    subject.subscribe(console.log);

    //two subscribers will get new value => output: 456, 456
    subject.next(456);

    //new subscriber will get latest value (456) => output: 456
    subject.subscribe(console.log);

    //all three subscribers will get new value => output: 789, 789, 789
    subject.next(789);
    subject.next(780);

    // output: 123, 123, 456, 456, 456, 789, 789, 789
  }

  public subject() {
    const sub = new Subject();

    sub.next(1);
    sub.subscribe(console.log);
    sub.next(2); // OUTPUT => 2
    sub.subscribe(console.log);
    sub.next(3); // OUTPUT => 3,3 (logged from both subscribers)
  }
}
