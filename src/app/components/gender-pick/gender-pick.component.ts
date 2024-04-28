import { Component } from '@angular/core';
import { RegisterPage } from 'src/app/pages/register/register.page';

@Component({
  selector: 'app-gender-pick',
  templateUrl: './gender-pick.component.html',
  styleUrls: ['./gender-pick.component.scss'],
})
export class GenderPickComponent  {

  constructor(private register : RegisterPage) { }

  clickNext(){
    this.register.currentProgress = 'bday';
    this.register.incrementProgressBar();
  }

}
