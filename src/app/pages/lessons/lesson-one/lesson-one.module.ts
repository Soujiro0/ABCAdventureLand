import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonOnePageRoutingModule } from './lesson-one-routing.module';

import { LessonOnePage } from './lesson-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonOnePageRoutingModule
  ],
  declarations: [LessonOnePage]
})
export class LessonOnePageModule {}
