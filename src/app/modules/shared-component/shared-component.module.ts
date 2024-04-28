import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AvatarPickComponent } from 'src/app/components/avatar-pick/avatar-pick.component';
import { BirthdaySelectorComponent } from 'src/app/components/birthday-selector/birthday-selector.component';
import { GenderPickComponent } from 'src/app/components/gender-pick/gender-pick.component';
import { InputDetailsComponent } from 'src/app/components/input-details/input-details.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';



@NgModule({
  declarations: [
    GenderPickComponent,
    BirthdaySelectorComponent,
    InputDetailsComponent,
    AvatarPickComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    GenderPickComponent,
    BirthdaySelectorComponent,
    InputDetailsComponent,
    AvatarPickComponent,
    LoadingComponent,
  ],
})
export class SharedComponentModule { }
