import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { SignupService } from 'src/app/services/auth/signup.service';
import { passwordValidator } from './password-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  sub:Subscription[]=[]
  passwordVisibility:boolean=false;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private signup: SignupService,
    private error: MatSnackBar,
  ) { }
  formGroup = this.formBuilder.group({
    first_name: new UntypedFormControl('', [Validators.required]),
    last_name: new UntypedFormControl('', [Validators.required]),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', [Validators.required, passwordValidator()]),
  })
  ngOnInit(): void {
  }
  onSubmitSignup(){
    if(this.formGroup.valid){
      this.signup.signup(this.formGroup.value).subscribe(
        (data)=>{
          console.log(data)
        },
        (err)=>{
          console.log(err)
        }
      )
    }else{
      let err:string[]=[];
      if(this.formGroup.get('first_name')?.valid == false){
        err.push('نام را وارد کنید')
      }
      if(this.formGroup.get('last_name')?.valid == false){
        err.push('نام خانوادگی را وارد کنید')
      }
      if(this.formGroup.get('email')?.valid == false){
        if(this.formGroup.get("email")?.value==''){
          err.push("ایمیل را وارد کنید")
        }else{
          err.push('ایمیل وارد شده اشتباه است')
        }
      }
      if(this.formGroup.get('password')?.valid == false){
        if(this.formGroup.get("password")?.value==''){
          err.push("لطفا رمز عبور را وارد کنید")
        }else{
          err.push('رمز عبور قوی نمی‌باشد لطفا از ترکیب کاراکتر های بزرگ و کوچک و علامت‌های خاص استفاده کنید')
        }
      }
      console.log(err)
    }
  }
}
