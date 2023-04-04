import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { IssuesComponent } from './issues/issues.component';
import { PersonsComponent } from './persons/persons.component';
import { ProjectsComponent } from './projects/projects.component';
import { RequestsComponent } from './requests/requests.component';
import { SingleComponent } from './single.component';

const routes: Routes = [
  { path: '', component: SingleComponent, children:[
    { path: 'dashboard', component: DashboardComponent},
    { path: 'issues', component: IssuesComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'persons', component: PersonsComponent},
    { path: 'requests', component: RequestsComponent},
    { path: 'edit', component: EditComponent},
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleRoutingModule { }
