import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-check-overlay',
  templateUrl: './check-overlay.component.html',
  styleUrls: ['./check-overlay.component.scss'],
})
export class CheckOverlayComponent implements OnInit {
  @Input() isCorrect!: boolean;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    setTimeout(() => {
      this.modalController.dismiss(this.isCorrect);
    }, 1750);
  }
}
