import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InstructionComponent } from '../../components/instruction/instruction.component';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.page.html',
  styleUrls: ['./lectures.page.scss'],
})
export class LecturesPage {

  constructor(public modalController: ModalController) { }

  async openInstructionModal(lesson: string) {
    const modal = await this.modalController.create({
      component: InstructionComponent,
      componentProps: { lesson }
    });
    return await modal.present();
  }
}
