import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISignupForm } from 'src/app/shared/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(
    private http: HttpClient,
  ) { }

  signup(data:FormData):Observable<any>{
    return this.http.post(`${environment.SHARE_PATH}/users/create/`, data)
  }
}
