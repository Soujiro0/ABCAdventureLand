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
  currentAccount!: Profile;
  month!: number;
  day!: number;
  year!: number;
  model!: Profile;

  constructor(private data: DataProviderService, private modal: ModalController, private router: Router) { }

  ngOnInit() {
    this.currentAccount = this.data.currentLoginProfile;
    this.model = this.currentAccount;
    console.log(this.currentAccount);
    this.parseBirthday(this.currentAccount.birthday);
  }

  // Value getter of radio button
  selectedGender(event: Event) {
    const selectedValue = (event.target as HTMLIonRadioElement).value;
  }

  // Date validation
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

  // Parsing Birthday
  parseBirthday(birthday: string) {
    // Split the string into parts
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const parts = birthday.split(' ');

    if (parts.length !== 3) {
      throw new Error('Invalid birthday format');
    }

    // Extract the month
    const month = parts[0];
    const monthIndex = months.indexOf(month);
    this.month = monthIndex + 1;

    // Remove the comma from the day and parse it as an integer
    const day = parseInt(parts[1].replace(',', ''), 10);
    this.day = day;

    // Parse the year as an integer
    const year = parseInt(parts[2], 10);
    this.year = year;

    if (isNaN(day) || isNaN(year)) {
      throw new Error('Invalid day or year format');
    }


    return { month, day, year };
  }

  // Selects Avatar Image
  selectAvatar(profileImagePath: string) {
    this.model.avatarImagePath = profileImagePath;
  }

  progress() {
    this.currentAccount.progress![0].lessons[0].items[0].isFinished = true;
  }

  updateProfile(form: NgForm) {
    if (!form.valid) {
      alert('There are blank detail, Please fill up');
    } else {
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
