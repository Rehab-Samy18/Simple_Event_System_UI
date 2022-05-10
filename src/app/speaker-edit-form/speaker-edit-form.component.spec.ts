import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerEditFormComponent } from './speaker-edit-form.component';

describe('SpeakerEditFormComponent', () => {
  let component: SpeakerEditFormComponent;
  let fixture: ComponentFixture<SpeakerEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
