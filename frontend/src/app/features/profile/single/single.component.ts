import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/api/profile.service';
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
    logoIcon: null,
    title: '',
    isOwner:false,
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
        link:'projects',
        icon:'fact_check',
        name:'پروژه‌ها',
        needRoot: false,
        needOwner: false,
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
  profile:any
  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private user: UserService,
  ) { }

  ngOnInit(): void {
    this.profileService.profileId = this.route.snapshot.params["id"];
    let getProfile = this.profileService.getProfile().subscribe(
      (value)=>{
        this.profile = value;
        this.config.logoIcon = this.profile.image;
        this.config.title = this.profile.first_name+' '+this.profile.last_name;
        this.config.isOwner = this.profileService.profileId == this.user.getProfile().id;
        // console.log(this.profile);
        getProfile.unsubscribe();
      },
      (err)=>{
        console.log(err)
      }
    )
    // console.log(this.profileService.profileId)
  }

}
