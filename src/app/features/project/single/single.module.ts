import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleRoutingModule } from './single-routing.module';
import { SingleComponent } from './single.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    SingleComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SingleRoutingModule,
    AngularMaterialModule,
  ]
})
export class SingleModule { }
