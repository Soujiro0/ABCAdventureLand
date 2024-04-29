import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessonOnePlayPage } from './lesson-one-play.page';

const routes: Routes = [
  {
    path: '',
    component: LessonOnePlayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonOnePlayPageRoutingModule {}
