import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerhomeComponent } from './speakerhome.component';

describe('SpeakerhomeComponent', () => {
  let component: SpeakerhomeComponent;
  let fixture: ComponentFixture<SpeakerhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
