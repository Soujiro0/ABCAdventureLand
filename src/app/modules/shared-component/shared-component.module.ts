import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { LogoutPromptComponent } from 'src/app/components/logout-prompt/logout-prompt.component';
import { OptionsComponent } from 'src/app/components/options/options.component';
import { SettingsComponent } from 'src/app/components/settings/settings.component';
import { ShowHidePasswordComponent } from 'src/app/components/show-hide-password/show-hide-password.component';



@NgModule({
  declarations: [
    LoadingComponent,
    OptionsComponent,
    SettingsComponent,
    LogoutPromptComponent,
    ShowHidePasswordComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    LoadingComponent,
    OptionsComponent,
    SettingsComponent,
    LogoutPromptComponent,
    ShowHidePasswordComponent
  ],
})
export class SharedComponentModule { }
