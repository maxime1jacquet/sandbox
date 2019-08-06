import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSnakeComponent } from './rxjs-snake.component';

describe('RxjsSnakeComponent', () => {
  let component: RxjsSnakeComponent;
  let fixture: ComponentFixture<RxjsSnakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsSnakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
