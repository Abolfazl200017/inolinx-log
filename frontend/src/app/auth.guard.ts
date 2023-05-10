import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from './services/auth/jwt.service';
import { ProfileService } from './services/api/profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private jwt: JwtService,
    private profile: ProfileService,
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isAuth = !this.jwt.isRefreshTokenExpired();
      if(!isAuth){
        this.router.navigate(['/register'])
        return false
      }else{
        this.profile.setProfileFromStorage()
        return true;
      }
  }
  
}
