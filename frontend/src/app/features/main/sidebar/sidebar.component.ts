import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/auth/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() closeNav = new EventEmitter<null>();
  profile = this.userService.getProfile;
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
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }
  routeLink(){
    this.closeNav.emit(null);
  }
}
