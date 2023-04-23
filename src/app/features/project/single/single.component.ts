import { Component, OnInit } from '@angular/core';
import { ISideToolbar } from 'src/app/shared/interface';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  config:ISideToolbar={
    type:'project',
    logoIcon:'settings_applications',
    title:'ربومک',
    links:[
      {
        link:'dashboard',
        icon:'dashboard',
        name:'داشبورد',
      },
      {
        link:'issues',
        icon:'task',
        name:'مسائل',
      },
      {
        link:'categories',
        icon:'category',
        name:'دسته‌بندی',
      },
      {
        link:'persons',
        icon:'groups',
        name:'افراد',
      },
      {
        link:'edit',
        icon:'edit',
        name:'ویرایش',
      },
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
