import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleComponent } from './single.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditComponent } from './edit/edit.component';
import { PersonsComponent } from './persons/persons.component';
import { IssuesComponent } from 'src/app/shared/component/issues/issues.component';

const routes: Routes = [
  { path: '', component: SingleComponent, children:[
    { path: 'dashboard', component: DashboardComponent},
    { path: 'issues', component: IssuesComponent},
    { path: 'issues/:id', loadChildren: () => import('../../issue/issue.module').then(m => m.IssueModule) },
    { path: 'categories', component: CategoriesComponent},
    { path: 'edit', component: EditComponent},
    { path: 'persons', component: PersonsComponent},
    { path: '', redirectTo: 'dashboard', pathMatch: "full" },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleRoutingModule { }
