import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtService } from '../auth/jwt.service';
import { GlobalService } from '../global/global.service';
import { UserService } from '../auth/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileId!:number;
  constructor(
    private http: HttpClient,
    private jwt: JwtService,
    private global: GlobalService,
    private user: UserService,
  ){}
  getProfile = ()=>{
    // console.log(headers)
    return this.http.get(`${environment.SHARE_PATH}/users/user/list/${this.profileId}`)
  }
  edit(form:any){
    this.global.setLoading(true)
    let editProgress = this.jwt.getHeaders().subscribe(
      (headers)=>{
        this.http.patch(`${environment.SHARE_PATH}/users/update/${this.profileId}`, form, {headers}).subscribe(
          (data)=>{
            // console.log(data)
            this.global.setLoading(false)
            this.user.setProfile(this.profileId)
          },
          (err)=>{
            console.log(err)
            this.global.setLoading(false)
          }
        )
      }
    )
  }
}
