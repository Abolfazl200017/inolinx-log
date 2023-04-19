import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
  { path: '', loadChildren: () => import('./features/main/main.module').then(m => m.MainModule) },
  { path: 'issue', loadChildren: () => import('./features/issue/issue.module').then(m => m.IssueModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
