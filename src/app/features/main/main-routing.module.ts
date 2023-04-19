import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [{ path: '', component: MainComponent, children:[
  { path: 'new', loadChildren: () => import("../new/new.module").then(m => m.NewModule)},
  { path: 'profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule) },
  { path: 'project', loadChildren: () => import('../project/project.module').then(m => m.ProjectModule) },
  { path: '', loadChildren: () => import('../feed/feed.module').then(m => m.FeedModule) },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
