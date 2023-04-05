import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleComponent } from './single.component';
import { IssuesComponent } from './issues/issues.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditComponent } from './edit/edit.component';
import { PersonsComponent } from './persons/persons.component';

const routes: Routes = [
  { path: '', component: SingleComponent, children:[
    { path: 'dashboard', component: DashboardComponent},
    { path: 'issues', component: IssuesComponent},
    { path: 'categories', component: CategoriesComponent},
    { path: 'edit', component: EditComponent},
    { path: 'persons', component: PersonsComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleRoutingModule { }
