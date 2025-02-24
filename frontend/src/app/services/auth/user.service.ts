import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfile } from 'src/app/shared/interface';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private jwtHelper:JwtHelperService = new JwtHelperService();
  public profile: IProfile = <IProfile>{}
  // private userId:Observable<IProfile> = of(this.jwtHelper.decodeToken(localStorage.getItem('access_token') as string).user_id)
  constructor(
    private http: HttpClient,
  ){}
  getUserId():Observable<IProfile>{
    return this.jwtHelper.decodeToken(localStorage.getItem('access_token') as string).user_id
  }
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
  getProfile=():IProfile=>{
    return this.profile;
  }
  getProfileLink = (arr:any=[])=>{
    // console.log(this.profile)
    return ['/profile', this.profile.id , ...arr];
  }
}
