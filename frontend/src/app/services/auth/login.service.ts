import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface IUserLoginForm{
  email:string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: HttpClient,
  ) { }
  
  login(userLoginForm:IUserLoginForm){
    return this.http.post<any>(`${environment.SHARE_PATH}/users/token/`, userLoginForm)
  }
}
  