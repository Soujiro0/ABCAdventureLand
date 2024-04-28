import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterPage } from 'src/app/pages/register/register.page';

@Component({
  selector: 'app-avatar-pick',
  templateUrl: './avatar-pick.component.html',
  styleUrls: ['./avatar-pick.component.scss'],
})
export class AvatarPickComponent {

  constructor(private register : RegisterPage, private router : Router) { }

  //This method is fot navigating at Main Page
  goToMainPage(){
    this.router.navigate(['/tabs/lectures'])
  }
}
