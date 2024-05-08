import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InstructionComponent } from 'src/app/components/instruction/instruction.component';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.page.html',
  styleUrls: ['./lectures.page.scss'],
})
export class LecturesPage implements OnInit {

  constructor(public modalController: ModalController) { }

  async displayCurrentDisp(value: string) {
    const modal = await this.modalController.create({
      component: InstructionComponent,
    });
    return await modal.present();
  }

  ngOnInit() {
    return 0;
  }

}
