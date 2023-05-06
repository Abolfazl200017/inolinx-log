import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor() { }
  loading:boolean = false;
  changeLoading = ()=>{
    this.loading = !this.loading;
  }
}
