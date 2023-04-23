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

@NgModule({
  declarations: [
    ProjectCardComponent,
    PersonCardComponent,
    NewProjectComponent,
    SideToolbarComponent,
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
  ]
})
export class SharedModule { }
