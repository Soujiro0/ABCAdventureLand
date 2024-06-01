import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Profile } from 'src/app/models/profile';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { InstructionComponent } from '../../components/instruction/instruction.component';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.page.html',
  styleUrls: ['./quizzes.page.scss'],
})
export class QuizzesPage implements OnInit {

  // User Profile
  currentAccount!: Profile;

  constructor(private modalController: ModalController, private data: DataProviderService) { }

  ngOnInit() {
    this.currentAccount = this.data.currentLoginProfile;
  }

  async openInstruction(lesson: string) {
    const modal = await this.modalController.create({
      component: InstructionComponent,
      componentProps: { lesson: lesson }
    });
    return await modal.present();
  }
}
