import { Component } from '@angular/core';
import { RegisterPage } from 'src/app/pages/register/register.page';

@Component({
  selector: 'app-birthday-selector',
  templateUrl: './birthday-selector.component.html',
  styleUrls: ['./birthday-selector.component.scss'],
})
export class BirthdaySelectorComponent {

  constructor(private register : RegisterPage) { }

  clickNext(){
    this.register.currentProgress = 'input';
    this.register.incrementProgressBar();
  }
}
