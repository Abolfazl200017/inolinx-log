import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { timer } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private jwtHelper:JwtHelperService = new JwtHelperService();
  constructor(
    private http: HttpClient,
    private router: Router,
    private snack: MatSnackBar,
  ) { }
  setTokenInLocal(token:{access:string;refresh:string}){
    timer(0,20000).subscribe(
      (event)=>{
        if(this.isAccessTokenExpired()){
          if(!this.isRefreshTokenExpired()){
            this.http.post( `${environment.BASE_API_URL}users/token/refresh/` , this.getRefreshTokenInLocal()).subscribe(
              (response:{refresh:string}|any)=>{
                this.setAccessToken(response?.refresh)
              }
            )
          }else{
            this.router.navigate(['/register', 'login'])
            this.snack.open('باید دوباره وارد شوید', 'بستن')
          }
        }
      }
    )
    localStorage.setItem('access_token', JSON.stringify(token.access))
    localStorage.setItem('refresh_token', JSON.stringify(token.refresh))
  }
  setAccessToken(token:string){
    localStorage.setItem('access_token', JSON.stringify(token))
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

}
