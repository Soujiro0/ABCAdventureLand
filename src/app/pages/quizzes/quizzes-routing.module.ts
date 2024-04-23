import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizzesPage } from './quizzes.page';

const routes: Routes = [
  {
    path: '',
    component: QuizzesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizzesPageRoutingModule {}
