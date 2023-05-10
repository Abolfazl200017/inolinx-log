import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/auth/user.service';
import { ISideToolbar } from 'src/app/shared/interface';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  config:ISideToolbar={
    type:'profile',
    logoIcon: 'account_circle',
    title: 'سیدعباس موسوی اصل',
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
        link:'projects',
        icon:'fact_check',
        name:'پروژه‌ها',
      },
      // {
      //   link:'persons',
      //   icon:'group',
      //   name:'افراد',
      // },
      {
        link:'requests',
        icon:'person_add',
        name:'درخواست‌ها',
      },
      {
        link:'edit',
        icon:'edit',
        name:'ویرایش',
      },
    ]
  }
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params)
    this.userService.getUserId().subscribe(
      (user:any) => {
        console.log(user)
      }
    )
  }

}
