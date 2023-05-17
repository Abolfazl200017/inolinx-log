import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/api/profile.service';
import { UserService } from 'src/app/services/auth/user.service';
import { GlobalService } from 'src/app/services/global/global.service';

interface IProfile{
  "first_name": "string",
  "last_name": "string",
  "image": "string",
  "email": "user@example.com",
  "url": "string",
  "password": "string",
  "id": 0,
  "specialty": [
    "string"
  ]
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  profile:any=<IProfile>{};
  constructor(
    private user:UserService,
    private profileService: ProfileService,
    private global: GlobalService,
  ) {}
  
  ngOnInit(): void {
    setTimeout(() => {
      this.global.setLoading(true)
      this.profileService.getProfile().subscribe(
        (profile) => {
          this.profile = profile;
          // console.log(profile)
          this.global.setLoading(false)
        },
        (err)=>{
          console.log(err)
          this.global.setLoading(false)
        }
      )
    })
  }
  getArray(arr:any){
    if(arr!=undefined)
      return JSON.parse(arr.toString());
  }
}
