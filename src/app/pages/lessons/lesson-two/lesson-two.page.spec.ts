import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LessonTwoPage } from './lesson-two.page';

describe('LessonTwoPage', () => {
  let component: LessonTwoPage;
  let fixture: ComponentFixture<LessonTwoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
