import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRxjsComponent } from './input-rxjs.component';

describe('InputRxjsComponent', () => {
  let component: InputRxjsComponent;
  let fixture: ComponentFixture<InputRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
