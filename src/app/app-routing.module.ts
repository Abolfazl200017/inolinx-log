import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
  { path: '', loadChildren: () => import('./features/main/main.module').then(m => m.MainModule) },
  { path: 'feed', loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
