import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonTwoPageRoutingModule } from './lesson-two-routing.module';

import { LessonTwoPage } from './lesson-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonTwoPageRoutingModule
  ],
  declarations: [LessonTwoPage]
})
export class LessonTwoPageModule {}
