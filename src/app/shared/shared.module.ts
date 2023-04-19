import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ProjectCardComponent } from './component/project-card/project-card.component';
import { PersonCardComponent } from './component/person-card/person-card.component';
import { NewProjectComponent } from './component/new-project/new-project.component';
import { NgxDatePickerModule } from '@ah99/ngx-date-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleIssueComponent } from './component/single-issue/single-issue.component';


@NgModule({
  declarations: [
    ProjectCardComponent,
    PersonCardComponent,
    NewProjectComponent,
    SingleIssueComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NgxDatePickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ProjectCardComponent,
    PersonCardComponent,
    NewProjectComponent,
  ]
})
export class SharedModule { }
