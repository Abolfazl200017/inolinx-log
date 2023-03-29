import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';


@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    AngularMaterialModule
  ]
})
export class MainModule { }
