import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { IssueComponent } from './issue/issue.component';
import { ProjectComponent } from './project/project.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    NewComponent,
    IssueComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    AngularMaterialModule
  ]
})
export class NewModule { }
