import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { IssueComponent } from './issue/issue.component';
import { ProjectComponent } from './project/project.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { NgxDatePickerModule } from '@ah99/ngx-date-picker';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NewComponent,
    IssueComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    AngularMaterialModule,
    FormsModule,
    NgxDatePickerModule.forRoot(),
    HttpClientModule,
    AngularEditorModule,
  ]
})
export class NewModule { }
