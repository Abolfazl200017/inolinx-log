import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { SignupService } from 'src/app/services/auth/signup.service';
import { passwordValidator } from './password-validator';
import { GlobalService } from 'src/app/services/global/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  sub:Subscription[]=[]
  passwordVisibility:boolean=false;
  errs:string[]=[]
  sign_up:Subscription | undefined;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private signup: SignupService,
    private snack: MatSnackBar,
    private global: GlobalService,
    private router: Router,
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
      this.global.setLoading(true)
      let data = this.formGroup.value
      data.image = null;
      data.is_superuser = false;
      data.specialty = [''];
      this.sign_up = this.signup.signup(data).subscribe(
        (data)=>{
          this.global.setLoading(false)
          this.snack.open('ثبت نام شما با موفقیت انجام شد', 'بستن', {duration: 2000})
          this.formGroup.reset()
          this.router.navigate(['/register'])
        },
        (err)=>{
          this.global.setLoading(false)
          console.log(err)
          if(err.status==0){
            this.snack.open('اتصال شما برقرار نیست','بستن', {duration: 2000})
          }else{
            if(err.status<500){
              this.snack.open('ارور چهارصدی داریم','بستن', {duration: 2000})
            }
          }
          if(err.status>=500){
            this.snack.open('مشکلی از سمت سرور پیش آمده','بستن', {duration: 2000})
          }
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
          err.push('رمز عبور قوی نمی‌باشد')
        }
      }
      this.errs = err;
    }
  }
  ngOnDestroy(): void {
    this.sign_up?.unsubscribe();
  }
}
