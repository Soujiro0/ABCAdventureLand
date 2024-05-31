import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InstructionComponent } from '../../components/instruction/instruction.component';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.page.html',
  styleUrls: ['./quizzes.page.scss'],
})
export class QuizzesPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  async openInstruction(lesson: string) {
    const modal = await this.modalController.create({
      component: InstructionComponent,
      componentProps: { lesson: lesson }
    });
    return await modal.present();
  }
}
