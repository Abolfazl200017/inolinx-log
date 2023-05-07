import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
  { path: '', loadChildren: () => import('./features/main/main.module').then(m => m.MainModule), canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
