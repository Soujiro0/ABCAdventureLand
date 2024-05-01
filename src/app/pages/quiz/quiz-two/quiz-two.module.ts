import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizTwoPageRoutingModule } from './quiz-two-routing.module';

import { QuizTwoPage } from './quiz-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizTwoPageRoutingModule
  ],
  declarations: [QuizTwoPage]
})
export class QuizTwoPageModule {}
