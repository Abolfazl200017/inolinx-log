import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/auth/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  profile = this.user.getProfile;
  constructor(
    private user:UserService
  ) {}
  
  ngOnInit(): void {}
  getArray(arr:any){
    if(arr!=undefined)
      return JSON.parse(arr.toString());
  }
}
