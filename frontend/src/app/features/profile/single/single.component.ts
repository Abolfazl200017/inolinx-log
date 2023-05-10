import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/api/profile.service';
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
    title: 'سید عباس موسوی',
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
  profile:any
  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.profileService.profileId = this.route.snapshot.params["id"];
    let getProfile = this.profileService.getProfileHeader().subscribe(
      (value)=>{
        this.profile = JSON.parse(value as string);
        console.log(this.profile);
      },
      (err)=>{
        console.log(err)
      }
    )
    // console.log(this.profileService.profileId)
  }

}
