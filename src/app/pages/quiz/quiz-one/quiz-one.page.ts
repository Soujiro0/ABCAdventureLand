import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-one',
  templateUrl: './quiz-one.page.html',
  styleUrls: ['./quiz-one.page.scss'],
})
export class QuizOnePage implements OnInit {
  currentQuizIndex: number = 0;
  quizzes: any[] = [
    {
      images: [
        '../../../../assets/images/quiz-choices/capsA-inactive.png',
        '../../../../assets/images/quiz-choices/smallN-inactive.png',
        '../../../../assets/images/quiz-choices/smallG-inactive.png',
        '../../../../assets/images/quiz-choices/capsQ-inactive.png',
        '../../../../assets/images/quiz-choices/capsM-inactive.png',
        '../../../../assets/images/quiz-choices/smallA-inactive.png'
      ]
    },
    {
      images: [
        '../../../../assets/images/quiz-choices/smallE-inactive.png',
        '../../../../assets/images/quiz-choices/smallM-inactive.png',
        '../../../../assets/images/quiz-choices/capsM-inactive.png',
        '../../../../assets/images/quiz-choices/capsJ-inactive.png',
        '../../../../assets/images/quiz-choices/smallI-inactive.png',
        '../../../../assets/images/quiz-choices/capsK-inactive.png'
      ]
    },
    {
      images: [
        '../../../../assets/images/quiz-choices/smallB-inactive.png',
        '../../../../assets/images/quiz-choices/smallR-inactive.png',
        '../../../../assets/images/quiz-choices/capsV-inactive.png',
        '../../../../assets/images/quiz-choices/capsD-inactive.png',
        '../../../../assets/images/quiz-choices/capsR-inactive.png',
        '../../../../assets/images/quiz-choices/smallU-inactive.png'
      ]
    },
    {
      images: [
        '../../../../assets/images/quiz-choices/capsX-inactive.png',
        '../../../../assets/images/quiz-choices/smallN-inactive.png',
        '../../../../assets/images/quiz-choices/capsT-inactive.png',
        '../../../../assets/images/quiz-choices/smallM-inactive.png',
        '../../../../assets/images/quiz-choices/capsN-inactive.png',
        '../../../../assets/images/quiz-choices/smallW-inactive.png'
      ]
    },
    {
      images: [
        '../../../../assets/images/quiz-choices/capsJ-inactive.png',
        '../../../../assets/images/quiz-choices/smallQ-inactive.png',
        '../../../../assets/images/quiz-choices/capsQ-inactive.png',
        '../../../../assets/images/quiz-choices/smallJ-inactive.png',
        '../../../../assets/images/quiz-choices/capsE-inactive.png',
        '../../../../assets/images/quiz-choices/smallF-inactive.png'
      ]
    },
    {
      images: [
        '../../../../assets/images/quiz-choices/smallH-inactive.png',
        '../../../../assets/images/quiz-choices/capsR-inactive.png',
        '../../../../assets/images/quiz-choices/smallW-inactive.png',
        '../../../../assets/images/quiz-choices/capsH-inactive.png',
        '../../../../assets/images/quiz-choices/smallX-inactive.png',
        '../../../../assets/images/quiz-choices/smallO-inactive.png'
      ]
    },
    {
      images: [
        '../../../../assets/images/quiz-choices/smallE-inactive.png',
        '../../../../assets/images/quiz-choices/smallQ-inactive.png',
        '../../../../assets/images/quiz-choices/smallP-inactive.png',
        '../../../../assets/images/quiz-choices/capsP-inactive.png',
        '../../../../assets/images/quiz-choices/smallR-inactive.png',
        '../../../../assets/images/quiz-choices/capsK-inactive.png'
      ]
    },
    {
      images: [
        '../../../../assets/images/quiz-choices/smallR-inactive.png',
        '../../../../assets/images/quiz-choices/capsT-inactive.png',
        '../../../../assets/images/quiz-choices/smallS-inactive.png',
        '../../../../assets/images/quiz-choices/capsD-inactive.png',
        '../../../../assets/images/quiz-choices/smallT-inactive.png',
        '../../../../assets/images/quiz-choices/capsR-inactive.png'
      ]
    },
    {
      images: [
        '../../../../assets/images/quiz-choices/smallV-inactive.png',
        '../../../../assets/images/quiz-choices/capsB-inactive.png',
        '../../../../assets/images/quiz-choices/smallG-inactive.png',
        '../../../../assets/images/quiz-choices/smallI-inactive.png',
        '../../../../assets/images/quiz-choices/smallB-inactive.png',
        '../../../../assets/images/quiz-choices/smallA-inactive.png'
      ]
    },
    {
      images: [
        '../../../../assets/images/quiz-choices/smallZ-inactive.png',
        '../../../../assets/images/quiz-choices/smallM-inactive.png',
        '../../../../assets/images/quiz-choices/smallL-inactive.png',
        '../../../../assets/images/quiz-choices/capsJ-inactive.png',
        '../../../../assets/images/quiz-choices/smallI-inactive.png',
        '../../../../assets/images/quiz-choices/capsZ-inactive.png'
      ]
    }
  ];

  constructor() { }

  ngOnInit() { }

  onCheckButtonClick() {
    if (this.currentQuizIndex < this.quizzes.length - 1) {
      this.currentQuizIndex++;
    } else {
      console.log('Quiz completed');
    }
  }
}
