import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() closeNav = new EventEmitter<null>();
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
    },
    {
      link: ['/report'],
      name: 'گزارش‌ها',
      icon: 'checklist',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  routeLink(){
    this.closeNav.emit(null);
  }
}
