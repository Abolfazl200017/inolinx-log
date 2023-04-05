import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { IssueComponent } from './issue/issue.component';
import { ProjectComponent } from './project/project.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatePickerModule } from '@ah99/ngx-date-picker';
import { HttpClientModule } from '@angular/common/http';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SharedModule } from 'src/app/shared/shared.module';


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
    ReactiveFormsModule,
    NgxDatePickerModule.forRoot(),
    HttpClientModule,
    EditorModule,
    SharedModule,
  ]
})
export class NewModule { }
