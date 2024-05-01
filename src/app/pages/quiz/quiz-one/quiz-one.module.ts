import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizOnePageRoutingModule } from './quiz-one-routing.module';

import { QuizOnePage } from './quiz-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizOnePageRoutingModule
  ],
  declarations: [QuizOnePage]
})
export class QuizOnePageModule {}
