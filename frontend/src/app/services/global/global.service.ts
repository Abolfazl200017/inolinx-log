import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  loading:boolean = false;
  private imgObject:any={}
  constructor() { }
  changeLoading = ()=>{
    this.loading = !this.loading;
  }
  setLoading = (value:boolean)=>{
    this.loading = value;
  }
  loadImage(imgName:any,time:number=0){
    setTimeout(() => {
      return this.imgObject[imgName] = true;
    }, time);
  }
}
