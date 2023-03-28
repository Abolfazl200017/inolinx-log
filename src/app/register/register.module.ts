import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    RegisterComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    AngularMaterialModule,
  ]
})
export class RegisterModule { }
