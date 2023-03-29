import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    FeaturesComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    AngularMaterialModule
  ]
})
export class FeaturesModule { }
