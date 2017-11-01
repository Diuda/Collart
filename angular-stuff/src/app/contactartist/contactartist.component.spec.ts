import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactartistComponent } from './contactartist.component';

describe('ContactartistComponent', () => {
  let component: ContactartistComponent;
  let fixture: ComponentFixture<ContactartistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactartistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
