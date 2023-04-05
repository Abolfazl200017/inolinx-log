import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ListComponent } from './list/list.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    ProfileComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AngularMaterialModule,
  ]
})
export class ProfileModule { }
