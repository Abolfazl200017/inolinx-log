import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    AngularMaterialModule,
    SharedModule,
  ],
})
export class FeedModule { }
