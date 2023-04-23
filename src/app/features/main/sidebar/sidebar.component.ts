import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navLinks=[
    {
      link: ['/'],
      name: 'داشبورد',
      icon: 'dashboard',
    },
    {
      link: ['/project/list'],
      name: 'پروژه‌ها',
      icon: 'fact_check',
    },
    {
      link: ['/profile', 'list'],
      name: 'افراد',
      icon: 'groups',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
