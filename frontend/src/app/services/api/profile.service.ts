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
  base64ToFile(base64Image: string): Blob {
    const split = base64Image.split(',');
    const type = split[0].replace('data:', '').replace(';base64', '');
    const byteString = atob(split[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i += 1) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type});
  }
}
