import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessonOnePage } from './lesson-one.page';

const routes: Routes = [
  {
    path: '',
    component: LessonOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonOnePageRoutingModule {}
