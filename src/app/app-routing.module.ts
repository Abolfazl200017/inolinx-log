import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
  { path: '', loadChildren: () => import('./features/project.module').then(m => m.ProjectModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
