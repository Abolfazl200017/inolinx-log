import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginator } from './CustomPaginatorConfiguration';


@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    AngularMaterialModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ],
})
export class FeedModule { }
