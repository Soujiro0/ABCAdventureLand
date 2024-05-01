import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizOnePage } from './quiz-one.page';

describe('QuizOnePage', () => {
  let component: QuizOnePage;
  let fixture: ComponentFixture<QuizOnePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
