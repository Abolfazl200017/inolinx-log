import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  pageEvent?:PageEvent;
  message:any='';
  constructor() { }

  ngOnInit(): void {
  }
  enter(){
    console.log(this.pageEvent)
  }
}
