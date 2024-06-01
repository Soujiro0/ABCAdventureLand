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

  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  days: number[] = [];
  years: number[] = [];
  month!: string;
  day!: number;
  year!: number;
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
  selectedAvatarIndex: number = 0;

  monthModel!: string;
  dayModel!: number;
  yearModel!: number;
  model: any = {}

  constructor(private router : Router, private data: DataProviderService) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    this.initializeDays();
    this.initializeYears();
  }

  selectedGender(event: Event) {
    const selectedValue = (event.target as HTMLIonRadioElement).value;
    console.log(selectedValue);
  }

  initializeDays() {
    this.days = Array.from({ length: 31 }, (_, i) => i + 1);
  }

  initializeYears() {
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: 101 }, (_, i) => currentYear - i);
  }

  validateBirthday() {
    this.month = this.monthModel;
    this.year = this.yearModel;
    console.log('pogi');
    if (this.monthModel != null) {
      this.updateDays();
    }
  }

  updateDays() {
    console.log('update days');
    console.log(this.month);
    const monthIndex = this.months.indexOf(this.month);
    console.log(`monthIndex: ${monthIndex}`);
    if (monthIndex === -1) return;

    let daysInMonth;
    switch (monthIndex) {
      case 1: // February
        daysInMonth = this.isLeapYear(this.year) ? 29 : 28;
        console.log(daysInMonth);
        break;
      case 3: case 5: case 8: case 10: // April, June, September, November
        daysInMonth = 30;
        break;
      default: // All other months
        daysInMonth = 31;
    }

    this.days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    // Adjust the selected day if it is greater than the new max days in the month
    if (this.day > daysInMonth) {
      this.day = daysInMonth;
    }
  }

  isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  selectAvatar(index: number, profileImagePath: string) {
    this.selectedAvatarIndex = index;
    if (profileImagePath == null) {
      this.model.avatarImagePath = this.profilePictures[this.selectedAvatarIndex];
    } else {
      this.model.avatarImagePath = profileImagePath;
    }
  }

  addAccount(form: NgForm) {
    if (!form.valid) {
      alert('Please fill all the fields');
    } else {

      if (this.model.avatarImagePath == null) {
        this.model.avatarImagePath = this.profilePictures[this.selectedAvatarIndex];
      }
      this.model.birthday = `${this.monthModel} ${this.dayModel}, ${this.yearModel}`
      this.model.progress = [
        {
          lessons: [
            {
              lessonNo: 1,
              items: Array.from({ length: 26 }, () => ({
                isFinished: false
              }))
            },
            {
              lessonNo: 2,
              items: Array.from({ length: 10 }, () => ({
                isFinished: false
              }))
            }
          ]
        },
        {
          quizzes: [
            {
              quizNo: 1,
              items: Array.from({ length: 10 }, () => ({
                isFinished: false
              }))
            },
            {
              quizNo: 2,
              items: Array.from({ length: 10 }, () => ({
                isFinished: false
              }))
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
