import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }
  log(e:any){
    console.log(e);
  }
}
