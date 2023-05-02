import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatePickerModule } from '@ah99/ngx-date-picker';


@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatePickerModule.forRoot(),
  ]
})
export class ReportModule { }
