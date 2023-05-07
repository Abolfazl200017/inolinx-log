import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/services/auth/jwt.service';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formError:boolean=false;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private loginService: LoginService,
    private router: Router,
    private jwtService: JwtService,
  ) { }

  formGroup = this.formBuilder.group({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', [Validators.required, Validators.minLength(8)])
  })
  ngOnInit(): void {
  }
  login(){
    if(this.formGroup.valid || true){
      this.loginService.login(this.formGroup.value).subscribe(
        (response:any)=>{
          this.jwtService.setTokenInLocal(response)
          // this.router.navigate(["/"]);
        },
        (err)=>{
          console.log(err);
        }
      )
    }
  }
}
