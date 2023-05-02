import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ProjectComponent } from './project.component';

const routes: Routes = [{ path: '', component: ProjectComponent, children: [
  { path: 'list', component: ListComponent},
  { path: ':id', loadChildren: () => import('./single/single.module').then(m => m.SingleModule) },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
