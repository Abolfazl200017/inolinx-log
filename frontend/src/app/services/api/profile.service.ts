import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, fromEvent, map, of, tap } from 'rxjs';
import { IProfile } from 'src/app/shared/interface';
import { environment } from 'src/environments/environment';
import { JwtService } from '../auth/jwt.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private jwtHelper:JwtHelperService = new JwtHelperService();
  private profile: IProfile = <IProfile>{}
  constructor(
    private http: HttpClient,
  ){}
  setProfile(id:number){
    // console.log('id: ', id);
    let prof = this.http.get(`${environment.SHARE_PATH}/users/user/list/${id}`).subscribe(
      (response: any) => {
        this.profile = response;
        // console.log(this.profile)
      },
      (err)=>{
        console.log(err);
        prof.unsubscribe();
      }
    )
  }
  setProfileFromStorage(){
    let id = (this.jwtHelper.decodeToken(localStorage.getItem("access_token") as string)).user_id
    this.setProfile(id)
  }
  getProfile():IProfile{
    return this.profile;
  }
  getProfileLink():string[]{
    console.log(this.profile)
    return ['/profile', `${this.profile.id}_${this.profile.first_name}_${this.profile.last_name}`];
  }
  
}
