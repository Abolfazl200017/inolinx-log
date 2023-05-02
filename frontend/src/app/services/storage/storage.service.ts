import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  setItem(key:string,value:any){
    localStorage.setItem(key,value)
  }
  setData(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value))
  }
  getItem(key:string){
    return localStorage.getItem(key)
  }
  getData(key:string){
    return JSON.parse((localStorage.getItem(key) as string))
  }
  clear(){
    localStorage.clear()
  }
  removeItem(key:string){
    localStorage.removeItem(key)
  }
}
