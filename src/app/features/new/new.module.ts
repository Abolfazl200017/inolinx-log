import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { IssueComponent } from './issue/issue.component';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    NewComponent,
    IssueComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule
  ]
})
export class NewModule { }
