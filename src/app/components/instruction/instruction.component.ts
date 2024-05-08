import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss'],
})
export class InstructionComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  close() {
    this.modalController.dismiss();
  }

  ngOnInit() {}

}
