import { Component, OnInit } from '@angular/core';
import {  UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  startDateControl:any;
  endDateControl:any;
  config:any={
    calendar:'jalali',
    doneText:'تایید',
    cancelText:'انصراف',
    themeConfig: {
      light: {
          primaryColor: "#3f51b5", // string
          secondaryColor: "#444444", // string
          backgroudColor: "#ffffff" // string
      },
      dark: {
          primaryColor: "#ffffff", //string
          secondaryColor: "#eeeeee", // string
          backgroudColor: "#444444" // string
      },
      rounded: "medium" // flase | "medium" | "full"
    }
  }
  constructor(
    private formBuilder: UntypedFormBuilder,
  ) { }
  formGroup = this.formBuilder.group({
    title: new UntypedFormControl('', [Validators.required]),
    urlTitle: new UntypedFormControl('', [Validators.required]),
    owner: new UntypedFormControl("", [Validators.required]),
    info: new UntypedFormControl("", [Validators.required]),
    startDate: new Date(),
    endDate: new Date(),
  });
  ngOnInit(): void {
  }
  log(e:any){
    // console.log(e);
  }
  console(){
    console.log(this.formGroup)
  }
}
