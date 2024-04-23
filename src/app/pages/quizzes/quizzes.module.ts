import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizzesPageRoutingModule } from './quizzes-routing.module';

import { QuizzesPage } from './quizzes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizzesPageRoutingModule
  ],
  declarations: [QuizzesPage]
})
export class QuizzesPageModule {}
