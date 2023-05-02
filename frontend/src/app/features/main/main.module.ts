import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ProfileDropdownComponent } from './header/profile-dropdown/profile-dropdown.component';


@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    HeaderComponent,
    ProfileDropdownComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    AngularMaterialModule
  ]
})
export class MainModule { }
