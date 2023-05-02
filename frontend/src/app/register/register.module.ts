import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RegisterModule { }
