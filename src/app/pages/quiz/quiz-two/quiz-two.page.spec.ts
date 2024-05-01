import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizTwoPage } from './quiz-two.page';

describe('QuizTwoPage', () => {
  let component: QuizTwoPage;
  let fixture: ComponentFixture<QuizTwoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
