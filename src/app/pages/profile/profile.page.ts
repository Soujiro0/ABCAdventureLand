import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Profile } from 'src/app/models/profile';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

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
  currentAccount!: Profile;
  monthModel!: string;
  dayModel!: number;
  yearModel!: number;
  model!: Profile;

  constructor(private data: DataProviderService, private modal: ModalController, private router: Router) { }

  ngOnInit() {
    this.currentAccount = this.data.currentLoginProfile;
    this.selectedAvatarIndex = this.profilePictures.indexOf(this.currentAccount.avatarImagePath);
    this.model = this.currentAccount;
    console.log(this.currentAccount);
    this.parseBirthday(this.currentAccount.birthday);
    this.initializeDays();
    this.initializeYears();
  }

  // Value getter of radio button
  selectedGender(event: Event) {
    (event.target as HTMLIonRadioElement).value;
  }

  // Date validation
  initializeDays() {
    this.days = Array.from({ length: 31 }, (_, i) => i + 1);
  }

  initializeYears() {
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: 101 }, (_, i) => currentYear - i);
  }

  // Date validation
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
  // Parsing Birthday
  parseBirthday(birthday: string): object {
    // Split the string into parts
    const parts = birthday.split(' ');

    if (parts.length !== 3) {
      throw new Error('Invalid birthday format');
    }

    // Extract the month
    const month = parts[0];
    const monthIndex = this.months.indexOf(month);
    this.monthModel = this.months[monthIndex];

    // Remove the comma from the day and parse it as an integer
    const day = parseInt(parts[1].replace(',', ''), 10);
    this.dayModel = day;

    // Parse the year as an integer
    const year = parseInt(parts[2], 10);
    this.yearModel = year;

    if (isNaN(day) || isNaN(year)) {
      throw new Error('Invalid day or year format');
    }

    return { month, day, year };
  }

  // Selects Avatar Image
  selectAvatar(index: number, profileImagePath: string) {
    this.selectedAvatarIndex = index;
    this.model.avatarImagePath = profileImagePath;
  }

  calculateProgress(progressName: string): number {

    let progress;
    let totalItems;

    switch(progressName) {

      case 'lesson 1':
        totalItems = this.currentAccount.progress![0].lessons[0].items.length;
        progress = this.currentAccount.progress![0].lessons[0].items.filter(item => item.isFinished == true);
        return (progress.length / totalItems);

      case 'lesson 2':
        totalItems = this.currentAccount.progress![0].lessons[1].items.length;
        progress = this.currentAccount.progress![0].lessons[1].items.filter(item => item.isFinished == true);
        return (progress.length / totalItems);

      case 'overall lesson':
        progress = [];
        totalItems = this.currentAccount.progress![0].lessons[0].items.length + this.currentAccount.progress![0].lessons[1].items.length;
        for (let index = 0; index < this.currentAccount.progress![0].lessons.length; index++) {
          this.currentAccount.progress![0].lessons[index].items.forEach((item) => {
            if(item.isFinished == true){
              progress.push(item);
            }
          });
        }
        return (progress.length / totalItems);

      case 'quiz 1':
        totalItems = this.currentAccount.progress![1].quizzes[0].items.length;
        progress = this.currentAccount.progress![1].quizzes[0].items.filter(item => item.isFinished == true);
        return (progress.length / totalItems);

      case 'quiz 2':
        totalItems = this.currentAccount.progress![1].quizzes[1].items.length;
        progress = this.currentAccount.progress![1].quizzes[1].items.filter(item => item.isFinished == true);
        return (progress.length / totalItems);

      case 'overall quiz':
        progress = [];
        totalItems = this.currentAccount.progress![1].quizzes[0].items.length + this.currentAccount.progress![1].quizzes[1].items.length;
        for (let index = 0; index < this.currentAccount.progress![1].quizzes.length; index++) {
          this.currentAccount.progress![1].quizzes[index].items.forEach((item) => {
            if(item.isFinished == true){
              progress.push(item);
            }
          });
        }
        return (progress.length / totalItems);

      default:
        return 0;

    }

  }

  updateProfile(form: NgForm) {
    console.log('Form Value');
    console.log(form.value);
    console.log(`dayModel: ${this.dayModel}`)
    console.log('model');
    console.log(this.model);
    if (!form.valid) {
      alert('There are blank detail, Please fill up');
    } else {
      this.model.birthday = `${this.monthModel} ${this.dayModel}, ${this.yearModel}`
      this.model.progress = this.currentAccount.progress;
      this.data.updateProfile(this.currentAccount.id, this.model);
      alert('Update Successfully');
      this.modal.dismiss();
    }
  }

  deleteProfile(id: string) {
    alert('Profile Deleted Successfully');
    this.modal.dismiss();
    this.data.deleteProfile(id);
    this.router.navigate(['landing']);
  }
}
