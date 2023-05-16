import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtService } from '../auth/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileId!:number;
  constructor(
    private http: HttpClient,
    private jwt: JwtService,
  ){}
  getProfile = ()=>{
    // console.log(headers)
    return this.http.get(`${environment.SHARE_PATH}/users/user/list/${this.profileId}`)
  }
  edit(form:any){
    let editProgress = this.jwt.getHeaders().subscribe(
      (headers)=>{
        this.http.patch(`${environment.SHARE_PATH}/users/update/${this.profileId}`, form, {headers}).subscribe(
          (data)=>{
            console.log(data)
          },
          (err)=>{
            console.log(err)
          }
        )
      }
    )
  }
}
