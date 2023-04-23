import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleRoutingModule } from './single-routing.module';
import { SingleComponent } from './single.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { CategoriesComponent } from './categories/categories.component';
import { PersonsComponent } from './persons/persons.component';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './categories/category/category.component';


@NgModule({
  declarations: [
    SingleComponent,
    DashboardComponent,
    CategoriesComponent,
    PersonsComponent,
    EditComponent,
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    SingleRoutingModule,
    AngularMaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SingleModule { }
