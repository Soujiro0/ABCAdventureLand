import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-two',
  templateUrl: './quiz-two.page.html',
  styleUrls: ['./quiz-two.page.scss'],
})
export class QuizTwoPage implements OnInit {
  currentQuizIndex: number = 0;
  quizzes: any[] = [
    {
      illustration: '../../../../assets/QUIZ2obj/pig.png',
      letters: { letter1: 'P', letter2: '____', letter3: 'G' },
      choices: [
        '../../../../assets/images/quiz-choices/capsA-inactive.png',
        '../../../../assets/images/quiz-choices/capsE-inactive.png',
        '../../../../assets/images/quiz-choices/capsI-inactive.png'
      ]
    },
    {
      illustration: '../../../../assets/QUIZ2obj/bus.png',
      letters: { letter1: 'B', letter2: '____', letter3: 'S' },
      choices: [
        '../../../../assets/images/quiz-choices/capsU-inactive.png',
        '../../../../assets/images/quiz-choices/capsO-inactive.png',
        '../../../../assets/images/quiz-choices/capsA-inactive.png'
      ]
    },
    {
      illustration: '../../../../assets/QUIZ2obj/mug.png',
      letters: { letter1: 'M', letter2: '____', letter3: 'G' },
      choices: [
        '../../../../assets/images/quiz-choices/capsA-inactive.png',
        '../../../../assets/images/quiz-choices/capsU-inactive.png',
        '../../../../assets/images/quiz-choices/capsO-inactive.png'
      ]
    },
    {
      illustration: '../../../../assets/QUIZ2obj/axe.png',
      letters: { letter1: 'A', letter2: '____', letter3: 'E' },
      choices: [
        '../../../../assets/images/quiz-choices/capsY-inactive.png',
        '../../../../assets/images/quiz-choices/capsZ-inactive.png',
        '../../../../assets/images/quiz-choices/capsX-inactive.png'
      ]
    },
    {
      illustration: '../../../../assets/QUIZ2obj/ice.png',
      letters: { letter1: 'I', letter2: '____', letter3: 'E' },
      choices: [
        '../../../../assets/images/quiz-choices/capsL-inactive.png',
        '../../../../assets/images/quiz-choices/capsR-inactive.png',
        '../../../../assets/images/quiz-choices/capsC-inactive.png'
      ]
    },
    {
      illustration: '../../../../assets/QUIZ2obj/ape.png',
      letters: { letter1: 'A', letter2: '____', letter3: 'E' },
      choices: [
        '../../../../assets/images/quiz-choices/capsP-inactive.png',
        '../../../../assets/images/quiz-choices/capsZ-inactive.png',
        '../../../../assets/images/quiz-choices/capsT-inactive.png'
      ]
    },
    {
      illustration: '../../../../assets/QUIZ2obj/web.png',
      letters: { letter1: 'W', letter2: '____', letter3: 'B' },
      choices: [
        '../../../../assets/images/quiz-choices/capsA-inactive.png',
        '../../../../assets/images/quiz-choices/capsE-inactive.png',
        '../../../../assets/images/quiz-choices/capsI-inactive.png'
      ]
    },
    {
      illustration: '../../../../assets/QUIZ2obj/box.png',
      letters: { letter1: 'B', letter2: '____', letter3: 'X' },
      choices: [
        '../../../../assets/images/quiz-choices/capsO-inactive.png',
        '../../../../assets/images/quiz-choices/capsE-inactive.png',
        '../../../../assets/images/quiz-choices/capsI-inactive.png'
      ]
    },
    {
      illustration: '../../../../assets/QUIZ2obj/owl.png',
      letters: { letter1: 'O', letter2: '____', letter3: 'W' },
      choices: [
        '../../../../assets/images/quiz-choices/capsL-inactive.png',
        '../../../../assets/images/quiz-choices/capsA-inactive.png',
        '../../../../assets/images/quiz-choices/capsW-inactive.png'
      ]
    },
    {
      illustration: '../../../../assets/QUIZ2obj/ant.png',
      letters: { letter1: 'A', letter2: '____', letter3: 'T' },
      choices: [
        '../../../../assets/images/quiz-choices/capsL-inactive.png',
        '../../../../assets/images/quiz-choices/capsN-inactive.png',
        '../../../../assets/images/quiz-choices/capsF-inactive.png'
      ]
    }
  ];

  constructor() { }

  ngOnInit() { }

  onChoiceClick() {
    if (this.currentQuizIndex < this.quizzes.length - 1) {
      this.currentQuizIndex++;
    } else {
      console.log('Quiz completed');
    }
  }
}
