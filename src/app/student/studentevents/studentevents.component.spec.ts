import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenteventsComponent } from './studentevents.component';

describe('StudenteventsComponent', () => {
  let component: StudenteventsComponent;
  let fixture: ComponentFixture<StudenteventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenteventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenteventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
