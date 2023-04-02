import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  passwordVisibility:boolean=false;
  constructor(
    private formBuilder: UntypedFormBuilder
  ) { }
  formGroup = this.formBuilder.group({
    name: new UntypedFormControl('', [Validators.required]),
    lastName: new UntypedFormControl('', [Validators.required]),
    email: new UntypedFormControl('', [Validators.required, Validators.pattern((/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/))]),
    password: new UntypedFormControl('', [Validators.required, Validators.minLength(8)]),
  })
  ngOnInit(): void {
  }
  console(){
    console.log(this.formGroup.valid)
  }
}
