import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {

  public buffer = 0.06;
  public progress = 0;

  constructor(private router : Router) {
    let loading =   
    setInterval(() => {
      this.buffer += 0.30;
      this.progress += 0.30;
  
      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        this.buffer = 0.10;
        this.progress = 0.10;
        clearInterval(loading);
        this.router.navigate(['tabs/lectures']);
      }
    }, 1000);
  }
}
