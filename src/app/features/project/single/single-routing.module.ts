import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleComponent } from '../../profile/single/single.component';

const routes: Routes = [
  { path: '', component: SingleComponent, children:[
    { path: 'dashboard', component: DashboardComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleRoutingModule { }
