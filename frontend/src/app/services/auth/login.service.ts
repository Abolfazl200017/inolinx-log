import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';
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
    return this.http.post<any>(`http://localhost:8000/users/token/`, userLoginForm)
  }
}
  