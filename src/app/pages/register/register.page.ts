import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  currentProgress : string | undefined;
  progressBar : number = .2;

  constructor(private router : Router) { }

  ngOnInit() {
    this.currentProgress = 'gender';
  }

  //This method returns boolean for displaying current display progress
  displayCurrentDisp(display : string){
    if(this.currentProgress ===  display){
      return false;
    } else {
      return true;
    }
  }

  //This method is for progressing the progress bar
  incrementProgressBar(){
    this.progressBar += .20;
  }
}
