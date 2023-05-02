import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formError:boolean=false;
  constructor(
    private formBuilder: UntypedFormBuilder
  ) { }

  formGroup = this.formBuilder.group({
    email: new UntypedFormControl('', [Validators.required, Validators.pattern((/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*)$/))]),
    password: new UntypedFormControl('', [Validators.required, Validators.minLength(8)])
  })
  ngOnInit(): void {
  }
  console(){
    console.log(this.formGroup.valid)
  }
}
