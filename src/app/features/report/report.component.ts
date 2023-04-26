import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  pageEvent?:PageEvent;
  message:string='';
  textFieldSize:string='h-6'
  startDateControl:any;
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
  constructor() { }

  ngOnInit(): void {
  }
  enter(){
   this.textFieldSize=(1.5*(this.message.split('\n').length+1)).toString()
   if(this.message.split('\n').length==1){
    this.textFieldSize = 'h-6';
   }else if(this.message.split('\n').length==2){
    this.textFieldSize = 'h-12';
   }else if(this.message.split('\n').length>2){
    this.textFieldSize = 'h-[4.5rem]'
   }
  }
}
