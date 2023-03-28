import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  darkMode:boolean=false;
  title = 'log-inolinx';
  showFiller = false;
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
  }
}