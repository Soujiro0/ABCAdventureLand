import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Profile } from 'src/app/models/profile';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { CheckOverlayComponent } from '../../../components/check-overlay/check-overlay.component';

@Component({
  selector: 'app-quiz-two',
  templateUrl: './quiz-two.page.html',
  styleUrls: ['./quiz-two.page.scss'],
})
export class QuizTwoPage implements OnInit {

  quizzes: any[] = [
    {
      illustration: '../../../../assets/QUIZ2obj/pig.png',
      letters: { letter1: 'P', letter2: '____', letter3: 'G' },
      choices: [
        { imgPath: '../../../../assets/images/quiz-choices/capsA-inactive.png', isCorrect: false },
        { imgPath: '../../../../assets/images/quiz-choices/capsE-inactive.png', isCorrect: false },
        { imgPath: '../../../../assets/images/quiz-choices/capsI-inactive.png', isCorrect: true }
      ]
    },
    {
      illustration: '../../../../assets/QUIZ2obj/bus.png',
      letters: { letter1: 'B', letter2: '____', letter3: 'S' },
      choices: [
        { imgPath: '../../../../assets/images/quiz-choices/capsU-inactive.png', isCorrect: true },
        { imgPath: '../../../../assets/images/quiz-choices/capsO-inactive.png', isCorrect: false },
        { imgPath: '../../../../assets/images/quiz-choices/capsA-inactive.png', isCorrect: false }
      ]
    },
    {
      illustration: '../../../../assets/QUIZ2obj/mug.png',
      letters: { letter1: 'M', letter2: '____', letter3: 'G' },
      choices: [
        { imgPath: '../../../../assets/images/quiz-choices/capsA-inactive.png', isCorrect: false },
        { imgPath: '../../../../assets/images/quiz-choices/capsU-inactive.png', isCorrect: true },
        { imgPath: '../../../../assets/images/quiz-choices/capsO-inactive.png', isCorrect: false }
      ]
    },
    {
      illustration: '../../../../assets/QUIZ2obj/axe.png',
      letters: { letter1: 'A', letter2: '____', letter3: 'E' },
      choices: [
        { imgPath: '../../../../assets/images/quiz-choices/capsY-inactive.png', isCorrect: false },
        { imgPath: '../../../../assets/images/quiz-choices/capsZ-inactive.png', isCorrect: false },
        { imgPath: '../../../../assets/images/quiz-choices/capsX-inactive.png', isCorrect: true }
      ]
    },
    {
      illustration: '../../../../assets/QUIZ2obj/ice.png',
      letters: { letter1: 'I', letter2: '____', letter3: 'E' },
      choices: [
        { imgPath: '../../../../assets/images/quiz-choices/capsL-inactive.png', isCorrect: false },
        { imgPath: '../../../../assets/images/quiz-choices/capsR-inactive.png', isCorrect: false },
        { imgPath: '../../../../assets/images/quiz-choices/capsC-inactive.png', isCorrect: true }
      ]
    },
    {
      illustration: '../../../../assets/QUIZ2obj/ape.png',
      letters: { letter1: 'A', letter2: '____', letter3: 'E' },
      choices: [
        { imgPath: '../../../../assets/images/quiz-choices/capsP-inactive.png', isCorrect: true },
        { imgPath: '../../../../assets/images/quiz-choices/capsZ-inactive.png', isCorrect: false },
        { imgPath: '../../../../assets/images/quiz-choices/capsT-inactive.png', isCorrect: false }
      ]
    },
    {
      illustration: '../../../../assets/QUIZ2obj/web.png',
      letters: { letter1: 'W', letter2: '____', letter3: 'B' },
      choices: [
        { imgPath: '../../../../assets/images/quiz-choices/capsA-inactive.png', isCorrect: false },
        { imgPath: '../../../../assets/images/quiz-choices/capsE-inactive.png', isCorrect: true },
        { imgPath: '../../../../assets/images/quiz-choices/capsI-inactive.png', isCorrect: false }
      ]
    },
    {
      illustration: '../../../../assets/QUIZ2obj/box.png',
      letters: { letter1: 'B', letter2: '____', letter3: 'X' },
      choices: [
        { imgPath: '../../../../assets/images/quiz-choices/capsO-inactive.png', isCorrect: true },
        { imgPath: '../../../../assets/images/quiz-choices/capsE-inactive.png', isCorrect: false },
        { imgPath: '../../../../assets/images/quiz-choices/capsI-inactive.png', isCorrect: false }
      ]
    },
    {
      illustration: '../../../../assets/QUIZ2obj/owl.png',
      letters: { letter1: 'O', letter2: '____', letter3: 'L' },
      choices: [
        { imgPath: '../../../../assets/images/quiz-choices/capsL-inactive.png', isCorrect: false },
        { imgPath: '../../../../assets/images/quiz-choices/capsA-inactive.png', isCorrect: false },
        { imgPath: '../../../../assets/images/quiz-choices/capsW-inactive.png', isCorrect: true }
      ]
    },
    {
      illustration: '../../../../assets/QUIZ2obj/ant.png',
      letters: { letter1: 'A', letter2: '____', letter3: 'T' },
      choices: [
        { imgPath: '../../../../assets/images/quiz-choices/capsL-inactive.png', isCorrect: false },
        { imgPath: '../../../../assets/images/quiz-choices/capsN-inactive.png', isCorrect: true },
        { imgPath: '../../../../assets/images/quiz-choices/capsF-inactive.png', isCorrect: false }
      ]
    }
  ];
  currentQuizIndex: number = 0;

  // User Profile
  currentItem: number = 0;
  currentAccount!: Profile;

  constructor(private modalController: ModalController, private data: DataProviderService) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    this.currentAccount = this.data.currentLoginProfile;
    this.currentItem = this.currentQuizIndex;
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
      this.currentAccount.progress![1].quizzes[1].items[this.currentItem].isFinished = true;
      this.data.updateProfile(this.currentAccount.id, this.currentAccount);
    }

    if (data) {
      if (this.currentQuizIndex < this.quizzes.length - 1) {
        this.currentQuizIndex++;
        this.currentItem = this.currentQuizIndex;
      } else {
        console.log('Quiz completed');
      }
    }
  }
}
