import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleRoutingModule } from './single-routing.module';
import { SingleComponent } from './single.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { RequestsComponent } from './requests/requests.component';
import { IssuesComponent } from './issues/issues.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AvatarsComponent } from './edit/avatars/avatars.component';


@NgModule({
  declarations: [
    SingleComponent,
    DashboardComponent,
    IssuesComponent,
    ProjectsComponent,
    RequestsComponent,
    IssuesComponent,
    RequestsComponent,
    EditComponent,
    AvatarsComponent
  ],
  imports: [
    CommonModule,
    SingleRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class SingleModule { }
