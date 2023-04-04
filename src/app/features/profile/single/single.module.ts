import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleRoutingModule } from './single-routing.module';
import { SingleComponent } from './single.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { PersonsComponent } from './persons/persons.component';
import { RequestsComponent } from './requests/requests.component';
import { IssuesComponent } from './issues/issues.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    SingleComponent,
    DashboardComponent,
    IssuesComponent,
    ProjectsComponent,
    PersonsComponent,
    RequestsComponent,
    IssuesComponent,
    RequestsComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    SingleRoutingModule,
    AngularMaterialModule
  ]
})
export class SingleModule { }
