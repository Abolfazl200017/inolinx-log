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
