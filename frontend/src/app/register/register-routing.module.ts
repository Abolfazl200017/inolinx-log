import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: RegisterComponent , children:[
  {path: 'signup', component: SignupComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate:[AuthGuard]},
  {path: '', redirectTo: 'login', pathMatch: "full"},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
