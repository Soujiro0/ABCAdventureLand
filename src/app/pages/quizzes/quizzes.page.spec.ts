import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizzesPage } from './quizzes.page';

describe('QuizzesPage', () => {
  let component: QuizzesPage;
  let fixture: ComponentFixture<QuizzesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
