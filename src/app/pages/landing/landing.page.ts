import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    return 0;
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }
  goToAccounts() {
    this.router.navigate(['/accounts']);
  }
}
