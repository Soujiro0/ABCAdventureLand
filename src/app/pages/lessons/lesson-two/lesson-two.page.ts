import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Profile } from 'src/app/models/profile';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { CheckOverlayComponent } from '../../../components/check-overlay/check-overlay.component';

@Component({
  selector: 'app-lesson-two',
  templateUrl: './lesson-two.page.html',
  styleUrls: ['./lesson-two.page.scss'],
})
export class LessonTwoPage implements OnInit {

  lessons: any[] = [
    {
      object: 'rainbow.png',
      sentence: 'The colorful rainbow is in the sky. It gives us light and warmth.',
      question: 'What is in the sky?',
      choices: [
        { choice: 'rainbow', imgPath: '../../../../assets/images/lessonTwoChoices/rainbow.png', isCorrect: true },
        { choice: 'sun', imgPath: '../../../../assets/images/lessonTwoChoices/sun.png', isCorrect: false },
        { choice: 'clouds', imgPath: '../../../../assets/images/lessonTwoChoices/clouds.png', isCorrect: false }
      ]
    },
    {
      object: 'rainbow.png',
      sentence: 'The colorful rainbow is in the sky. It gives us light and warmth.',
      question: 'What does it give us?',
      choices: [
        { choice: 'color', imgPath: '../../../../assets/images/lessonTwoChoices/colors.png', isCorrect: false },
        { choice: 'light', imgPath: '../../../../assets/images/lessonTwoChoices/light.png', isCorrect: true },
        { choice: 'rain', imgPath: '../../../../assets/images/lessonTwoChoices/rain.png', isCorrect: false }
      ]
    },
    {
      object: 'flower.png',
      sentence: 'The beautiful flower blooms in the garden. It smells sweet.',
      question: 'What is blooming in the garden?',
      choices: [
        { choice: 'tree', imgPath: '../../../../assets/images/lessonTwoChoices/tree.png', isCorrect: false },
        { choice: 'grass', imgPath: '../../../../assets/images/lessonTwoChoices/grass.png', isCorrect: false },
        { choice: 'flower', imgPath: '../../../../assets/images/lessonTwoChoices/flowers.png', isCorrect: true }
      ]
    },
    {
      object: 'flower.png',
      sentence: 'The beautiful flower blooms in the garden. It smells sweet.',
      question: 'What does the flower smell like?',
      choices: [
        { choice: 'fresh', imgPath: '../../../../assets/images/lessonTwoChoices/fresh.png', isCorrect: false },
        { choice: 'sweet', imgPath: '../../../../assets/images/lessonTwoChoices/sweet.png', isCorrect: true },
        { choice: 'fragrant', imgPath: '../../../../assets/images/lessonTwoChoices/fragrant.png', isCorrect: false }
      ]
    },
    {
      object: 'puppy.png',
      sentence: 'The playful puppy runs in the park. It makes us smile.',
      question: 'What is running in the park?',
      choices: [
        { choice: 'kitten', imgPath: '../../../../assets/images/lessonTwoChoices/kitten.png', isCorrect: false },
        { choice: 'puppy', imgPath: '../../../../assets/images/lessonTwoChoices/puppy.png', isCorrect: true },
        { choice: 'rabbit', imgPath: '../../../../assets/images/lessonTwoChoices/rabbit.png', isCorrect: false }
      ]
    },
    {
      object: 'puppy.png',
      sentence: 'The playful puppy runs in the park. It makes us smile.',
      question: 'What does the puppy make us do?',
      choices: [
        { choice: 'laugh', imgPath: '../../../../assets/images/lessonTwoChoices/laugh.png', isCorrect: false },
        { choice: 'cry', imgPath: '../../../../assets/images/lessonTwoChoices/cry.png', isCorrect: false },
        { choice: 'smile', imgPath: '../../../../assets/images/lessonTwoChoices/smile.png', isCorrect: true }
      ]
    },
    {
      object: 'car.png',
      sentence: 'The fast car zooms down the road. It honks loudly. People cover their ears.',
      question: 'What is fast?',
      choices: [
        { choice: 'bus', imgPath: '../../../../assets/images/lessonTwoChoices/bus.png', isCorrect: false },
        { choice: 'car', imgPath: '../../../../assets/images/lessonTwoChoices/car.png', isCorrect: true },
        { choice: 'bike', imgPath: '../../../../assets/images/lessonTwoChoices/bike.png', isCorrect: false }
      ]
    },
    {
      object: 'car.png',
      sentence: 'The fast car zooms down the road. It honks loudly. People cover their ears.',
      question: 'What do people cover?',
      choices: [
        { choice: 'ears', imgPath: '../../../../assets/images/lessonTwoChoices/ears.png', isCorrect: true },
        { choice: 'mouth', imgPath: '../../../../assets/images/lessonTwoChoices/mouth.png', isCorrect: false },
        { choice: 'eyes', imgPath: '../../../../assets/images/lessonTwoChoices/eyes.png', isCorrect: false }
      ]
    },
    {
      object: 'elephant.png',
      sentence: 'The big elephant trumpets loudly. It sprays water and the children would laugh.',
      question: 'What do children do?',
      choices: [
        { choice: 'smile', imgPath: '../../../../assets/images/lessonTwoChoices/smile.png', isCorrect: false },
        { choice: 'cry', imgPath: '../../../../assets/images/lessonTwoChoices/cry.png', isCorrect: false },
        { choice: 'laugh', imgPath: '../../../../assets/images/lessonTwoChoices/laugh.png', isCorrect: true }
      ]
    },
    {
      object: 'elephant.png',
      sentence: 'The big elephant trumpets loudly. It sprays water and the children would laugh.',
      question: 'What does it spray?',
      choices: [
        { choice: 'rain', imgPath: '../../../../assets/images/lessonTwoChoices/rain.png', isCorrect: false },
        { choice: 'water', imgPath: '../../../../assets/images/lessonTwoChoices/water.png', isCorrect: true },
        { choice: 'tears', imgPath: '../../../../assets/images/lessonTwoChoices/tears.png', isCorrect: false }
      ]
    }
  ];
  currentLessonIndex: number = 0;

  // User Profile
  currentItem: number = 0;
  currentAccount!: Profile;

  constructor(private modalController: ModalController, private data: DataProviderService, private router: Router) { }

  ngOnInit() {
    this.currentAccount = this.data.currentLoginProfile;
    this.currentItem = this.currentLessonIndex;
  }

  async onChoiceClick(isCorrect: boolean) {
    const modal = await this.modalController.create({
      component: CheckOverlayComponent,
      cssClass: 'bottom-sheet-modal',
      componentProps: { isCorrect },
      showBackdrop: false,
      backdropDismiss: false
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();

    if(isCorrect) {
      this.currentAccount.progress![0].lessons[1].items[this.currentItem].isFinished = true;
      this.data.updateProfile(this.currentAccount.id, this.currentAccount);
    }

    if (data) {
      if (this.currentLessonIndex < this.lessons.length - 1) {
        this.currentLessonIndex++;
        this.currentItem = this.currentLessonIndex;
      } else {
        alert('Congrats you Complete Lesson 2!!😃😁');
        this.router.navigateByUrl('tabs/lectures');
      }
    }
  }
}
