import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ProjectCardComponent } from './component/project-card/project-card.component';
import { PersonCardComponent } from './component/person-card/person-card.component';



@NgModule({
  declarations: [
    ProjectCardComponent,
    PersonCardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    ProjectCardComponent,
    PersonCardComponent,
  ]
})
export class SharedModule { }
