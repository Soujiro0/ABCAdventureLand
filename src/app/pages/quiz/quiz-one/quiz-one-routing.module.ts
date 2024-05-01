import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizOnePage } from './quiz-one.page';

const routes: Routes = [
  {
    path: '',
    component: QuizOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizOnePageRoutingModule {}
