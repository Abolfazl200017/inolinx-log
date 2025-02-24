import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [{ path: '', component: ProfileComponent, children: [
  { path: 'list', component: ListComponent},
  { path: ':id', loadChildren: () => import('./single/single.module').then(m => m.SingleModule) },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
