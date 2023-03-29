import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';


@NgModule({
  declarations: [
    ProjectComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    AngularMaterialModule
  ]
})
export class ProjectModule { }
