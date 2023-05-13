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
    isOwner: false,
    links:[
      {
        link:'dashboard',
        icon:'dashboard',
        name:'داشبورد',
        needRoot: false,
        needOwner: false,
      },
      {
        link:'issues',
        icon:'task',
        name:'مسائل',
        needRoot: false,
        needOwner: false,
      },
      {
        link:'categories',
        icon:'category',
        name:'دسته‌بندی',
        needRoot: false,
        needOwner: false,
      },
      {
        link:'persons',
        icon:'groups',
        name:'افراد',
        needRoot: false,
        needOwner: false,
      },
      {
        link:'edit',
        icon:'edit',
        name:'ویرایش',
        needRoot: false,
        needOwner: true,
      },
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
