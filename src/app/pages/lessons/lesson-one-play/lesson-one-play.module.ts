import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonOnePlayPageRoutingModule } from './lesson-one-play-routing.module';

import { LessonOnePlayPage } from './lesson-one-play.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonOnePlayPageRoutingModule
  ],
  declarations: [LessonOnePlayPage]
})
export class LessonOnePlayPageModule {}
