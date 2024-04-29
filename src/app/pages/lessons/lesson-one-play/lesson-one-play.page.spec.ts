import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LessonOnePlayPage } from './lesson-one-play.page';

describe('LessonOnePlayPage', () => {
  let component: LessonOnePlayPage;
  let fixture: ComponentFixture<LessonOnePlayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonOnePlayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
