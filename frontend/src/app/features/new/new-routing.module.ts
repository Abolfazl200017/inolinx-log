import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueComponent } from './issue/issue.component';
import { NewComponent } from './new.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [{ path: '', component: NewComponent, children: [
  { path: 'issue', component: IssueComponent},
  { path: 'project', component: ProjectComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRoutingModule { }
