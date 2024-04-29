import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LessonOnePage } from './lesson-one.page';

describe('LessonOnePage', () => {
  let component: LessonOnePage;
  let fixture: ComponentFixture<LessonOnePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
