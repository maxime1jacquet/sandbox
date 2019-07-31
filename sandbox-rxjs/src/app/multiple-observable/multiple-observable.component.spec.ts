import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleObservableComponent } from './multiple-observable.component';

describe('MultipleObservableComponent', () => {
  let component: MultipleObservableComponent;
  let fixture: ComponentFixture<MultipleObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
