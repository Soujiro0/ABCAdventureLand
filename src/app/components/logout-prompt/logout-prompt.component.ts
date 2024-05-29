import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { OptionsComponent } from '../options/options.component';

@Component({
  selector: 'app-logout-prompt',
  templateUrl: './logout-prompt.component.html',
  styleUrls: ['./logout-prompt.component.scss'],
})
export class LogoutPromptComponent{
  @Input() trigger : any;
  constructor(private router : Router, private modal : ModalController, private option : OptionsComponent) { }

  navigateToLanding(){
    this.modal.dismiss();
    setTimeout(() => {
      this.option.dismissModal();
      this.router.navigateByUrl('landing');
    }, 300);
  }

  closeModal(){
    this.modal.dismiss();
  }
}
