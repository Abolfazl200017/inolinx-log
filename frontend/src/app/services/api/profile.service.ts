import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileId!:number;
  constructor(
    private http: HttpClient,
  ){}
  getProfileHeader = ()=>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.get(`${environment.SHARE_PATH}/users/user/list/${this.profileId}`, {headers: headers})
  }
}
