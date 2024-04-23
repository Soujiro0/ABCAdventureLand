import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LecturesPage } from './lectures.page';

describe('LecturesPage', () => {
  let component: LecturesPage;
  let fixture: ComponentFixture<LecturesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
