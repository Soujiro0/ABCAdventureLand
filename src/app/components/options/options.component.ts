import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent   {
  @Input() trigger : any;
  constructor(private modal : ModalController) { }

  dismissModal(){
    this.modal.dismiss();
  }

}
