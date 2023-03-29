import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';

const routes: Routes = [{ path: '', component: ProjectComponent, children:[
  { path: 'new', loadChildren: () => import("./new/new.module").then(m => m.NewModule)}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
