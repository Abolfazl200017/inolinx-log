import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ProjectCardComponent } from './component/project-card/project-card.component';
import { PersonCardComponent } from './component/person-card/person-card.component';
import { NewProjectComponent } from './component/new-project/new-project.component';
import { NgxDatePickerModule } from '@ah99/ngx-date-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SideToolbarComponent } from './component/side-toolbar/side-toolbar.component';
import { IssuesComponent } from './component/issues/issues.component';
import { IssueMainComponent } from './component/issues/issue-main/issue-main.component';
import { IssueFilterComponent } from './component/issues/issue-filter/issue-filter.component';
import { CategorySelectComponent } from './component/issues/category-select/category-select.component';
import { IssueCardComponent } from './component/issues/issue-main/issue-card/issue-card.component';
import { LogCardComponent } from './component/log-card/log-card.component';
import { SignupCardComponent } from './component/log-card/signup-card/signup-card.component';
import { CrudCardComponent } from './component/log-card/crud-card/crud-card.component';
import { AssignCardComponent } from './component/log-card/assign-card/assign-card.component';
import { CommentCardComponent } from './component/log-card/comment-card/comment-card.component';
import { ReportCardComponent } from './component/report-card/report-card.component';

@NgModule({
  declarations: [
    ProjectCardComponent,
    PersonCardComponent,
    NewProjectComponent,
    SideToolbarComponent,
    IssuesComponent,
    IssueMainComponent,
    IssueFilterComponent,
    CategorySelectComponent,
    IssueCardComponent,
    LogCardComponent,
    SignupCardComponent,
    CrudCardComponent,
    AssignCardComponent,
    CommentCardComponent,
    ReportCardComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NgxDatePickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    ProjectCardComponent,
    PersonCardComponent,
    NewProjectComponent,
    SideToolbarComponent,
    LogCardComponent,
    ReportCardComponent
  ]
})
export class SharedModule { }
