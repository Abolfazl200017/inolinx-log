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
  mainHeight:string='';
  @ViewChild('header') header:ElementRef|undefined;
  constructor(private local:StorageService){}
  ngOnInit():void {}
  doIt(){
    console.log('submit search')
  }
  
  setMode(mode:boolean){
    this.darkMode = mode;
    this.local.setData('darkMode', this.darkMode)
  }
  setMainHeight(){
    this.mainHeight = `height: calc(100% - ${this.header?.nativeElement.offsetHeight}px);`
  }
}