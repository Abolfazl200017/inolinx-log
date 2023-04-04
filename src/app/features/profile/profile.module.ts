import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
  ]
})
export class ProfileModule { }
