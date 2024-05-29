import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AvatarPickComponent } from 'src/app/components/avatar-pick/avatar-pick.component';
import { BirthdaySelectorComponent } from 'src/app/components/birthday-selector/birthday-selector.component';
import { GenderPickComponent } from 'src/app/components/gender-pick/gender-pick.component';
import { InputDetailsComponent } from 'src/app/components/input-details/input-details.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { LogoutPromptComponent } from 'src/app/components/logout-prompt/logout-prompt.component';
import { OptionsComponent } from 'src/app/components/options/options.component';
import { SettingsComponent } from 'src/app/components/settings/settings.component';



@NgModule({
  declarations: [
    GenderPickComponent,
    BirthdaySelectorComponent,
    InputDetailsComponent,
    AvatarPickComponent,
    LoadingComponent,
    OptionsComponent,
    SettingsComponent,
    LogoutPromptComponent
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
    OptionsComponent,
    SettingsComponent,
    LogoutPromptComponent
  ],
})
export class SharedComponentModule { }
