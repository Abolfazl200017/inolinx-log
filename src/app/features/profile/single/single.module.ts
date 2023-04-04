import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleRoutingModule } from './single-routing.module';
import { SingleComponent } from './single.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    SingleComponent
  ],
  imports: [
    CommonModule,
    SingleRoutingModule,
    AngularMaterialModule
  ]
})
export class SingleModule { }
