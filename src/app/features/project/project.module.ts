import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ListComponent } from './list/list.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    ProjectComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    AngularMaterialModule
  ]
})
export class ProjectModule { }
