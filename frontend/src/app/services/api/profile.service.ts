import { Injectable } from '@angular/core';
import { UserService } from '../auth/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  id:number=0;
  private jwtHelper:JwtHelperService = new JwtHelperService();
  constructor(
    private userService: UserService,
  ) { }
  isOwner = ()=>{
    
  }
}
