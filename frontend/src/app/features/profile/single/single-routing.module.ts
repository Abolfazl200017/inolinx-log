import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { ProjectsComponent } from './projects/projects.component';
import { RequestsComponent } from './requests/requests.component';
import { SingleComponent } from './single.component';
import { IssuesComponent } from 'src/app/shared/component/issues/issues.component';

const routes: Routes = [
  { path: '', component: SingleComponent, children:[
    { path: 'dashboard', component: DashboardComponent},
    { path: 'issues', component: IssuesComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'requests', component: RequestsComponent},
    { path: 'edit', component: EditComponent},
    { path: '', redirectTo: 'dashboard', pathMatch: "full" },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleRoutingModule { }
