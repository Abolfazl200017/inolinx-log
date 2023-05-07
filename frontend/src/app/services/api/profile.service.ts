import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProfile } from 'src/app/shared/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile: IProfile|undefined;
  constructor(
    private http: HttpClient,
  ){}
  setProfile(id:number){
    console.log('id: ', id);
    this.http.get(`${environment.SHARE_PATH}/users/user/list/`).subscribe(
      (response: any) => {
        // console.log(response);
        this.profile = response.find((item:IProfile)=> item.id == id);
      },
      (err)=>{
        // console.log(err)
      }
    )
  }
}
