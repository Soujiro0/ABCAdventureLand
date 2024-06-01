import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Profile } from 'src/app/models/profile';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { InstructionComponent } from '../../components/instruction/instruction.component';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.page.html',
  styleUrls: ['./lectures.page.scss'],
})
export class LecturesPage implements OnInit {

  // User Profile
  currentAccount!: Profile;

  constructor(public modalController: ModalController, private data: DataProviderService) { }

  ngOnInit(): void {
    this.currentAccount = this.data.currentLoginProfile;
  }

  async openInstructionModal(lesson: string) {
    const modal = await this.modalController.create({
      component: InstructionComponent,
      componentProps: { lesson }
    });
    return await modal.present();
  }

}
