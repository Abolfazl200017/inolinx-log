import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProfile } from 'src/app/shared/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profile: IProfile = <IProfile>{}
  constructor(
    private http: HttpClient,
  ){}
  setProfile(id:number){
    // console.log('id: ', id);
    let prof = this.http.get(`${environment.SHARE_PATH}/users/user/list/${id}`).subscribe(
      (response: any) => {
        this.profile = response;
        console.log(this.profile)
        prof.unsubscribe();
      },
      (err)=>{
        console.log(err);
        prof.unsubscribe();
      }
    )
  }
  getProfile():IProfile{
    return this.profile;
  }
  getProfileLink():string[]{
    console.log(this.profile)
    return ['/profile', `${this.profile.id}_${this.profile.first_name}_${this.profile.last_name}`];
  }
  
}
