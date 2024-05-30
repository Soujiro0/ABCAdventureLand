import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  profilePictures: string[] = [
    'assets/images/profilePictures/cat.png',
    'assets/images/profilePictures/chicken.png',
    'assets/images/profilePictures/dog.png',
    'assets/images/profilePictures/eagle.png',
    'assets/images/profilePictures/koala.png',
    'assets/images/profilePictures/monkey.png',
    'assets/images/profilePictures/pig.png',
    'assets/images/profilePictures/rabbit.png',
    'assets/images/profilePictures/siberian.png',
  ];
  selectedAvatar: any;

  month!: number;
  day!: number;
  year!: number;
  model: any = {}

  constructor(private router : Router, private data: DataProviderService) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() { }

  selectedGender(event: Event) {
    const selectedValue = (event.target as HTMLIonRadioElement).value;
    console.log(selectedValue);
  }

  validateBirthday() {
    let leapYear: number = this.year % 4 == 0? 29 : 28;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const daysInMonth = [31, leapYear, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (
        this.month != null &&
        this.day != null &&
        this.year != null &&
        this.year.toString().length == 4
      ) {
      if (!(this.month > 12 || this.month <= 0)) {
        if (this.day <= daysInMonth[this.month - 1]) {
          this.model.birthday = `${months[this.month - 1]} ${this.day}, ${this.year}`;
        } else {
          alert(`The Day is Exceed in the Month, There are ${daysInMonth[this.month - 1]} days in ${months[this.month - 1]}`);
          this.day = daysInMonth[this.month - 1];
        }
      } else {
        alert('Exceeding to the number of Month');
      }
    }
  }

  selectAvatar(profileImagePath: string) {
    this.model.avatarImagePath = profileImagePath;
  }

  addAccount(form: NgForm) {
    if (!form.valid) {
      alert('Please fill all the fields');
    } else {
      this.model.progress = [
        {
          lessons: [
            {
              lessonNo: 1,
              items: Array.from({ length: 26 }, (_, i) => ({
                itemNo: i + 1,
                isFinished: false
              }))
            },
            {
              lessonNo: 2,
              items: Array.from({ length: 10 }, (_, i) => ({
                itemNo: i + 1,
                isFinished: false
              }))
            }
          ]
        },
        {
          quizzes: [
            {
              quizNo: 1,
              isFinished: false
            },
            {
              quizNo: 2,
              isFinished: true
            }
          ]
        }
      ];
      this.data.addProfile(this.model);
      console.log(this.model);
      this.router.navigateByUrl('accounts');
    }
  }
}
