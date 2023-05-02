import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SignupService } from 'src/app/services/auth/signup.service';
import { ISignupForm } from 'src/app/shared/interface';

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
    private signup: SignupService
  ) { }
  formGroup = this.formBuilder.group({
    first_name: new UntypedFormControl('', [Validators.required]),
    last_name: new UntypedFormControl('', [Validators.required]),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', [Validators.required, Validators.minLength(8)]),
  })
  ngOnInit(): void {
  }
  onSubmitSignup(){
    if(this.formGroup.valid){1
      this.signup.signup(this.formGroup.value).subscribe(
        (data)=>{
          console.log(data)
        },
        (err)=>{
          console.log(err)
        }
      )
    }
  }
}
