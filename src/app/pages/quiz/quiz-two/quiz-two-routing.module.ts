import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizTwoPage } from './quiz-two.page';

const routes: Routes = [
  {
    path: '',
    component: QuizTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizTwoPageRoutingModule {}
