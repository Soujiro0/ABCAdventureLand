import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessonTwoPage } from './lesson-two.page';

const routes: Routes = [
  {
    path: '',
    component: LessonTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonTwoPageRoutingModule {}
