import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'lesson-one',
    loadChildren: () => import('./pages/lessons/lesson-one/lesson-one.module').then( m => m.LessonOnePageModule)
  },
  {
    path: 'lesson-two',
    loadChildren: () => import('./pages/lessons/lesson-two/lesson-two.module').then( m => m.LessonTwoPageModule)
  },
  {
    path: 'lesson-one-play',
    loadChildren: () => import('./pages/lessons/lesson-one-play/lesson-one-play.module').then( m => m.LessonOnePlayPageModule)
  },
  {
    path: 'quiz-one',
    loadChildren: () => import('./pages/quiz/quiz-one/quiz-one.module').then( m => m.QuizOnePageModule)
  },
  {
    path: 'quiz-two',
    loadChildren: () => import('./pages/quiz/quiz-two/quiz-two.module').then( m => m.QuizTwoPageModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('./pages/accounts/accounts.module').then( m => m.AccountsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
