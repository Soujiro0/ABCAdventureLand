import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Profile } from 'src/app/models/profile';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit, OnDestroy {

  accountsList: Profile[] = [];
  accountSub!: Subscription;
  bday!: string;

  constructor(private router: Router, private data: DataProviderService) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.data.getAccounts();
    this.accountSub = this.data.accounts.subscribe({
      next: (accounts) => {
        this.accountsList = accounts;
      },
      error: (e) => {
        console.log(e);
      }
    });
    console.log(this.bday);
  }

  loginProfile(profile: Profile) {
    this.data.currentLoginProfile = profile;
    this.router.navigate(['tabs/lectures']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  getBday(event: Event) {
    console.log(this.bday);
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnDestroy(): void {
    if (this.accountSub) {
      this.accountSub.unsubscribe();
    }
  }
}
