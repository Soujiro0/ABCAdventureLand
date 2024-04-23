import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'quizzes',
        children: [
          {
            path: '',
            loadChildren: () => import('../quizzes/quizzes.module').then(m => m.QuizzesPageModule)
          },
        ]
      },
      {
        path: 'lectures',
        children: [
          {
            path: '',
            loadChildren: () => import('../lectures/lectures.module').then(m => m.LecturesPageModule)
          },
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: 'lectures',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'lectures',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
