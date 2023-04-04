import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  passwordVisibility:boolean=false;
  constructor(
    private formBuilder: UntypedFormBuilder,
  ) { }

  ngOnInit(): void {
  }
  formGroup = this.formBuilder.group({
    name: new UntypedFormControl('ابوالفضل', [Validators.required]),
    lastName: new UntypedFormControl('زراعتکار', [Validators.required]),
    email: new UntypedFormControl('abolfazl@inolinx.com', [Validators.required, Validators.pattern((/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/))]),
    password: new UntypedFormControl('password', [Validators.required, Validators.minLength(8)]),
  })
}
