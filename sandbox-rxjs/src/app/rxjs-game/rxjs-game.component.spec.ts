import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsGameComponent } from './rxjs-game.component';

describe('RxjsGameComponent', () => {
  let component: RxjsGameComponent;
  let fixture: ComponentFixture<RxjsGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
