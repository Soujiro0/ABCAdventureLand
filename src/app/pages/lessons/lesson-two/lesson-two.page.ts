import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-two',
  templateUrl: './lesson-two.page.html',
  styleUrls: ['./lesson-two.page.scss'],
})
export class LessonTwoPage implements OnInit {
  currentLessonIndex: number = 0;
  lessons: any[] = [
    {
      object: 'rainbow.png',
      sentence: 'The colorful rainbow is in the sky. It gives us light and warmth.',
      question: 'What is in the sky?',
      choices: [
        { choice: 'rainbow', imgPath: '../../../../assets/images/lessonTwoChoices/rainbow.png' },
        { choice: 'sun', imgPath: '../../../../assets/images/lessonTwoChoices/sun.png' },
        { choice: 'clouds', imgPath: '../../../../assets/images/lessonTwoChoices/clouds.png' }
      ]
    },
    {
      object: 'rainbow.png',
      sentence: 'The colorful rainbow is in the sky. It gives us light and warmth.',
      question: 'What does it give us?',
      choices: [
        { choice: 'color', imgPath: '../../../../assets/images/lessonTwoChoices/colors.png' },
        { choice: 'light', imgPath: '../../../../assets/images/lessonTwoChoices/light.png' },
        { choice: 'rain', imgPath: '../../../../assets/images/lessonTwoChoices/rain.png' }
      ]
    },
    {
      object: 'flower.png',
      sentence: 'The beautiful flower blooms in the garden. It smells sweet.',
      question: 'What is blooming in the garden?',
      choices: [
        { choice: 'tree', imgPath: '../../../../assets/images/lessonTwoChoices/tree.png' },
        { choice: 'grass', imgPath: '../../../../assets/images/lessonTwoChoices/grass.png' },
        { choice: 'flower', imgPath: '../../../../assets/images/lessonTwoChoices/flowers.png' }
      ]
    },
    {
      object: 'flower.png',
      sentence: 'The beautiful flower blooms in the garden. It smells sweet.',
      question: 'What does the flower smell like?',
      choices: [
        { choice: 'fresh', imgPath: '../../../../assets/images/lessonTwoChoices/fresh.png' },
        { choice: 'sweet', imgPath: '../../../../assets/images/lessonTwoChoices/sweet.png' },
        { choice: 'fragrant', imgPath: '../../../../assets/images/lessonTwoChoices/fragrant.png' }
      ]
    },
    {
      object: 'puppy.png',
      sentence: 'The playful puppy runs in the park. It makes us smile.',
      question: 'What is running in the park?',
      choices: [
        { choice: 'kitten', imgPath: '../../../../assets/images/lessonTwoChoices/kitten.png' },
        { choice: 'puppy', imgPath: '../../../../assets/images/lessonTwoChoices/puppy.png' },
        { choice: 'rabbit', imgPath: '../../../../assets/images/lessonTwoChoices/rabbit.png' }
      ]
    },
    {
      object: 'puppy.png',
      sentence: 'The playful puppy runs in the park. It makes us smile.',
      question: 'What does the puppy make us do?',
      choices: [
        { choice: 'laugh', imgPath: '../../../../assets/images/lessonTwoChoices/laugh.png' },
        { choice: 'cry', imgPath: '../../../../assets/images/lessonTwoChoices/cry.png' },
        { choice: 'smile', imgPath: '../../../../assets/images/lessonTwoChoices/smile.png' }
      ]
    },
    {
      object: 'car.png',
      sentence: 'The fast car zooms down the road. It honks loudly. People cover their ears.',
      question: 'What is fast?',
      choices: [
        { choice: 'bus', imgPath: '../../../../assets/images/lessonTwoChoices/bus.png' },
        { choice: 'car', imgPath: '../../../../assets/images/lessonTwoChoices/car.png' },
        { choice: 'bike', imgPath: '../../../../assets/images/lessonTwoChoices/bike.png' }
      ]
    },
    {
      object: 'car.png',
      sentence: 'The fast car zooms down the road. It honks loudly. People cover their ears.',
      question: 'What do people cover?',
      choices: [
        { choice: 'ears', imgPath: '../../../../assets/images/lessonTwoChoices/ears.png' },
        { choice: 'mouth', imgPath: '../../../../assets/images/lessonTwoChoices/mouth.png' },
        { choice: 'eyes', imgPath: '../../../../assets/images/lessonTwoChoices/eyes.png' }
      ]
    },
    {
      object: 'elephant.png',
      sentence: 'The big elephant trumpets loudly. It sprays water and the children would laugh.',
      question: 'What do children do?',
      choices: [
        { choice: 'smile', imgPath: '../../../../assets/images/lessonTwoChoices/smile.png' },
        { choice: 'cry', imgPath: '../../../../assets/images/lessonTwoChoices/cry.png' },
        { choice: 'laugh', imgPath: '../../../../assets/images/lessonTwoChoices/laugh.png' }
      ]
    },
    {
      object: 'elephant.png',
      sentence: 'The big elephant trumpets loudly. It sprays water and the children would laugh.',
      question: 'What does it spray?',
      choices: [
        { choice: 'rain', imgPath: '../../../../assets/images/lessonTwoChoices/rain.png' },
        { choice: 'water', imgPath: '../../../../assets/images/lessonTwoChoices/water.png' },
        { choice: 'tears', imgPath: '../../../../assets/images/lessonTwoChoices/tears.png' }
      ]
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onChoiceClick() {
    if (this.currentLessonIndex < this.lessons.length - 1) {
      this.currentLessonIndex++;
    } else {
      // Handle the end of lessons
      console.log('All lessons completed');
    }
  }
}
