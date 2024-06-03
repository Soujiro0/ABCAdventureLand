import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CheckOverlayComponent } from 'src/app/components/check-overlay/check-overlay.component';
import { Profile } from 'src/app/models/profile';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-quiz-one',
  templateUrl: './quiz-one.page.html',
  styleUrls: ['./quiz-one.page.scss'],
})
export class QuizOnePage implements OnInit {

  quizzes: any[] = [
    {
      images: [
        {
          left: [
            { image: '../../../../assets/images/quiz-choices/capsA-inactive.png', no: 1, isCorrect: true },
            { image: '../../../../assets/images/quiz-choices/capsB-inactive.png', no: 2, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/capsC-inactive.png', no: 3, isCorrect: false },
          ]
        },
        {
          right: [
            { image: '../../../../assets/images/quiz-choices/smallD-inactive.png', no: 1, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/smallE-inactive.png', no: 2, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/smallA-inactive.png', no: 3, isCorrect: true },
          ]
        }
      ]
    },
    {
      images: [
        {
          left: [
            { image: '../../../../assets/images/quiz-choices/capsW-inactive.png', no: 1, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/capsO-inactive.png', no: 2, isCorrect: true },
            { image: '../../../../assets/images/quiz-choices/capsU-inactive.png', no: 3, isCorrect: false },
          ]
        },
        {
          right: [
            { image: '../../../../assets/images/quiz-choices/smallQ-inactive.png', no: 1, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/smallO-inactive.png', no: 2, isCorrect: true },
            { image: '../../../../assets/images/quiz-choices/smallG-inactive.png', no: 3, isCorrect: false },
          ]
        }
      ]
    },
    {
      images: [
        {
          left: [
            { image: '../../../../assets/images/quiz-choices/capsQ-inactive.png', no: 1, isCorrect: true },
            { image: '../../../../assets/images/quiz-choices/capsM-inactive.png', no: 2, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/capsP-inactive.png', no: 3, isCorrect: false },
          ]
        },
        {
          right: [
            { image: '../../../../assets/images/quiz-choices/smallN-inactive.png', no: 1, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/smallQ-inactive.png', no: 2, isCorrect: true },
            { image: '../../../../assets/images/quiz-choices/smallX-inactive.png', no: 3, isCorrect: false },
          ]
        }
      ]
    },
    {
      images: [
        {
          left: [
            { image: '../../../../assets/images/quiz-choices/capsI-inactive.png', no: 1, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/capsZ-inactive.png', no: 2, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/capsD-inactive.png', no: 3, isCorrect: true },
          ]
        },
        {
          right: [
            { image: '../../../../assets/images/quiz-choices/smallM-inactive.png', no: 1, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/smallD-inactive.png', no: 2, isCorrect: true },
            { image: '../../../../assets/images/quiz-choices/smallR-inactive.png', no: 3, isCorrect: false },
          ]
        }
      ]
    },
    {
      images: [
        {
          left: [
            { image: '../../../../assets/images/quiz-choices/capsA-inactive.png', no: 1, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/capsK-inactive.png', no: 2, isCorrect: true },
            { image: '../../../../assets/images/quiz-choices/smallF-inactive.png', no: 3, isCorrect: false },
          ]
        },
        {
          right: [
            { image: '../../../../assets/images/quiz-choices/smallH-inactive.png', no: 1, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/capsE-inactive.png', no: 2, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/smallK-inactive.png', no: 3, isCorrect: true },
          ]
        }
      ]
    },
    {
      images: [
        {
          left: [
            { image: '../../../../assets/images/quiz-choices/smallH-inactive.png', no: 1, isCorrect: true },
            { image: '../../../../assets/images/quiz-choices/capsR-inactive.png', no: 2, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/smallW-inactive.png', no: 3, isCorrect: false },
          ]
        },
        {
          right: [
            { image: '../../../../assets/images/quiz-choices/capsH-inactive.png', no: 1, isCorrect: true },
            { image: '../../../../assets/images/quiz-choices/smallX-inactive.png', no: 2, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/smallO-inactive.png', no: 3, isCorrect: false },
          ]
        }
      ]
    },
    {
      images: [
        {
          left: [
            { image: '../../../../assets/images/quiz-choices/smallE-inactive.png', no: 1, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/smallQ-inactive.png', no: 2, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/smallP-inactive.png', no: 3, isCorrect: true },
          ]
        },
        {
          right: [
            { image: '../../../../assets/images/quiz-choices/capsP-inactive.png', no: 1, isCorrect: true },
            { image: '../../../../assets/images/quiz-choices/smallR-inactive.png', no: 2, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/capsK-inactive.png', no: 3, isCorrect: false },
          ]
        }
      ]
    },
    {
      images: [
        {
          left: [
            { image: '../../../../assets/images/quiz-choices/smallR-inactive.png', no: 1, isCorrect: true },
            { image: '../../../../assets/images/quiz-choices/capsL-inactive.png', no: 2, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/smallS-inactive.png', no: 3, isCorrect: false },
          ]
        },
        {
          right: [
            { image: '../../../../assets/images/quiz-choices/capsD-inactive.png', no: 1, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/smallT-inactive.png', no: 2, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/capsR-inactive.png', no: 3, isCorrect: true },
          ]
        }
      ]
    },
    {
      images: [
        {
          left: [
            { image: '../../../../assets/images/quiz-choices/smallV-inactive.png', no: 1, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/capsB-inactive.png', no: 2, isCorrect: true },
            { image: '../../../../assets/images/quiz-choices/smallG-inactive.png', no: 3, isCorrect: false },
          ]
        },
        {
          right: [
            { image: '../../../../assets/images/quiz-choices/smallI-inactive.png', no: 1, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/smallB-inactive.png', no: 2, isCorrect: true },
            { image: '../../../../assets/images/quiz-choices/smallA-inactive.png', no: 3, isCorrect: false },
          ]
        }
      ]
    },
    {
      images: [
        {
          left: [
            { image: '../../../../assets/images/quiz-choices/smallZ-inactive.png', no: 1, isCorrect: true },
            { image: '../../../../assets/images/quiz-choices/smallM-inactive.png', no: 2, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/smallL-inactive.png', no: 3, isCorrect: false },
          ]
        },
        {
          right: [
            { image: '../../../../assets/images/quiz-choices/capsJ-inactive.png', no: 1, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/smallI-inactive.png', no: 2, isCorrect: false },
            { image: '../../../../assets/images/quiz-choices/capsZ-inactive.png', no: 3, isCorrect: true },
          ]
        }
      ]
    }
  ];
  currentQuizIndex: number = 0;
  selectedLeftIndex: number | null = null;
  selectedRightIndex: number | null = null;

  // User Profile
  currentItem: number = 0;
  currentAccount!: Profile;

  constructor(private modalController: ModalController, private data: DataProviderService, private router: Router) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    this.currentAccount = this.data.currentLoginProfile;
    this.currentItem = this.currentQuizIndex;
  }

  selected(index: number, side: string) {
    if (side === 'left') {
      this.selectedLeftIndex = index;
    } else {
      this.selectedRightIndex = index;
    }
  }


  async onCheckButtonClick(leftArray: any, rightArray: any) {

    let isCorrect = false;

    if (leftArray[this.selectedLeftIndex!].isCorrect && rightArray[this.selectedRightIndex!].isCorrect) {
      this.currentAccount.progress![1].quizzes[0].items[this.currentItem].isFinished = true;
      this.data.updateProfile(this.currentAccount.id, this.currentAccount);
      isCorrect = true;
    }

    const modal = await this.modalController.create({
      component: CheckOverlayComponent,
      cssClass: 'bottom-sheet-modal',
      componentProps: { isCorrect },
      showBackdrop: false,
      backdropDismiss: false
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();

    if (data) {
      if (this.currentQuizIndex < this.quizzes.length - 1) {
        this.selectedLeftIndex = null;
        this.selectedRightIndex = null;
        this.currentQuizIndex++;
        this.currentItem = this.currentQuizIndex;
      } else {
        alert('Congrats you Complete Quiz 1!!😃😁');
        this.router.navigateByUrl('tabs/quizzes');
      }
    }
  }
}
