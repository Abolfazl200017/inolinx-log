import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISignupForm } from 'src/app/shared/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient,
  ) { }
  signup(data:ISignupForm){
    return this.http.post(`${environment.BASE_API_URL}/users/create/`, data)
  }
}
