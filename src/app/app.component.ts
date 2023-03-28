import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StorageService } from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  darkMode:boolean=false;
  showFiller = false;
  @ViewChild(Headers) header:ElementRef|undefined;
  constructor(private local:StorageService){}
  ngOnInit():void {
    this.initMode();
  }
  doIt(){
    console.log('submit search')
  }
  initMode(){
    if(!this.local.getItem('darkMode')){
      this.local.setItem('darkMode', this.darkMode)
    }else {
      this.darkMode = this.local.getData('darkMode')
    }
  }
  changeMode(){
    this.darkMode = !this.darkMode;
    this.local.setData('darkMode', this.darkMode)
    console.log(this.header)
  }
}