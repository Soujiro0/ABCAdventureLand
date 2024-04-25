import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  progress = 0;


  constructor() { }

  ngOnInit() {
    this.progress = .25;
  }
}
