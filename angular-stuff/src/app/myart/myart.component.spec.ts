import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyartComponent } from './myart.component';

describe('MyartComponent', () => {
  let component: MyartComponent;
  let fixture: ComponentFixture<MyartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
