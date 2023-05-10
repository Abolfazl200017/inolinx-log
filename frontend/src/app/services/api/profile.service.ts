import { Injectable } from '@angular/core';
import { UserService } from '../auth/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileId!:number;
  constructor() { }
  isOwner = ()=>{
    
  }
}
