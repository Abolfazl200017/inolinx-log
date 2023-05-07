import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { timer } from 'rxjs'
import { environment } from 'src/environments/environment';
import { ProfileService } from '../api/profile.service';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private jwtHelper:JwtHelperService = new JwtHelperService();
  private accessToken:string|undefined;
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private snack: MatSnackBar,
    private profile: ProfileService,
  ) { }
  setTokenInLocal(token:{access:string;refresh:string}){
    // console.log(this.jwtHelper.decodeToken(token.access))
    this.setAccessToken(token.access)
    localStorage.setItem('refresh_token', JSON.stringify(token.refresh))
    let updateToken = timer(0,200000).subscribe(
      (event)=>{
        // console.log('access_token: ', this.isAccessTokenExpired(), '\nrefresh_token: ', this.isRefreshTokenExpired())
        this.profile.setProfile(this.jwtHelper.decodeToken(token.access).user_id)
        if(!this.isRefreshTokenExpired()){
          if(this.isAccessTokenExpired()){
            this.http.post( `${environment.SHARE_PATH}/users/token/refresh/` , {refresh:JSON.parse(this.getRefreshTokenInLocal())}).subscribe(
              (response:{access:string}|any)=>{
                this.setAccessToken(response?.access)
              },
              (err)=>{
                console.log(err)
              }
            )
          }else{
            this.router.navigate(['/register', 'login'])
            this.snack.open('باید دوباره وارد شوید', 'بستن', {duration:1500})
            updateToken.unsubscribe()
          }
        }
      }
    )
  }
  setAccessToken(token:string){
    this.accessToken = JSON.stringify(token);
    localStorage.setItem('access_token', this.accessToken)
  }
  getAccessTokenInLocal():string{
    return localStorage.getItem('access_token') as string;
  }
  getRefreshTokenInLocal():string{
    return localStorage.getItem('refresh_token') as string;
  }
  isAccessTokenExpired():boolean{
    return this.jwtHelper.isTokenExpired(localStorage.getItem('access_token'))
  }
  isRefreshTokenExpired():boolean{
    return this.jwtHelper.isTokenExpired(localStorage.getItem('refresh_token'))
  }
  logOut(){
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    this.router.navigate(["/register"])
  }
}
