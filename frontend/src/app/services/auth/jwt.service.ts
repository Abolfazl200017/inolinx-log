import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, timer } from 'rxjs'
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private jwtHelper:JwtHelperService = new JwtHelperService();
  private accessToken:string|undefined;
  private userId:number = 0;
  constructor(
    private http: HttpClient,
    private router: Router,
    private snack: MatSnackBar,
    private userService: UserService,
  ) { }
  getId(){
    if(localStorage.getItem('access_token'))
      return this.jwtHelper.decodeToken(localStorage.getItem('access_token') as string).user_id;
    else{
      return 0
    }
  }
  setTokenInLocal(token:{access:string;refresh:string}){
    // console.log(this.jwtHelper.decodeToken(token.access))
    this.setAccessToken(token.access)
    localStorage.setItem('refresh_token', JSON.stringify(token.refresh) as string)
    let updateToken = timer(0,200000).subscribe(
      (event)=>{
        // console.log('access_token: ', this.isAccessTokenExpired(), '\nrefresh_token: ', this.isRefreshTokenExpired())
        this.userService.setProfile(this.jwtHelper.decodeToken(token.access).user_id)
        this.userId = this.jwtHelper.decodeToken(token.access).user_id;
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
          }
        }else{
          this.router.navigate(['/register', 'login'])
          this.snack.open('لطفا دوباره وارد شوید', 'بستن', {duration:1500})
          updateToken.unsubscribe()
        }
      }
    )
  }
  setAccessToken(token:string){
    this.accessToken = JSON.stringify(token);
    localStorage.setItem('access_token', this.accessToken as string)
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
  // getHeaders = ()=>{
  //   if(this.isAccessTokenExpired()){

  //   }else{
  //     let headers = new HttpHeaders();
  //     headers = headers.append('Authorization' , `Bearer ${JSON.parse(this.getAccessTokenInLocal())}`)
  //     // headers = headers.append('Accept-Language' , 'fa')
  //     console.log(headers)
  //     return headers;
  //   }
  // }
  getHeaders = ():Observable<HttpHeaders>=>{
    let headersObs: Observable<HttpHeaders> = new Observable<HttpHeaders>((observer)=>{
        if(this.isAccessTokenExpired()){
          if(!this.isRefreshTokenExpired()){
            if(this.isAccessTokenExpired()){
              this.http.post( `${environment.SHARE_PATH}/users/token/refresh/` , {refresh:JSON.parse(this.getRefreshTokenInLocal())}).subscribe(
                (response:{access:string}|any)=>{
                  this.setAccessToken(response?.access)
                  observer.next(response.access)
                },
                (err)=>{
                  console.log(err)
                }
              )
            }
          }else{
          }
        }else{
          let headers = new HttpHeaders();
          headers = headers.append('Authorization' , `Bearer ${JSON.parse(this.getAccessTokenInLocal())}`)
          observer.next(headers)
        }
      }
    )
    return headersObs
  }
}
