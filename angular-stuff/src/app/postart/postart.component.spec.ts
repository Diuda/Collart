import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostartComponent } from './postart.component';

describe('PostartComponent', () => {
  let component: PostartComponent;
  let fixture: ComponentFixture<PostartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
