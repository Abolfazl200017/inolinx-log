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
    let headers = this.jwt.getHeaders()
    return this.http.patch(`${environment.BASE_API_URL}users/${this.profileId}/`, form, {headers})
  }
}
