import { Component } from '@angular/core';
import { RegisterPage } from 'src/app/pages/register/register.page';

@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.scss'],
})
export class InputDetailsComponent {
  
  constructor(private register : RegisterPage) { }

  clickNext(){
    this.register.currentProgress = 'avatar';
    this.register.incrementProgressBar();
  }
}
