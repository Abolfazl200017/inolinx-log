import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../../../services/storage/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  darkMode:boolean=false;
  profileExpansion:{isShow:boolean;running:boolean;class:string}={isShow:false, running:false,class:'opacity-0 hidden'};
  isShow:boolean=false;
  @Output() darkModeChange: EventEmitter<boolean> = new EventEmitter();
  @Output() menu:EventEmitter<null> = new EventEmitter();
  constructor(private local:StorageService){}
  ngOnInit():void {
  }
  ngAfterViewInit():void {
    setTimeout(() => {
      this.initMode();
    });
  }
  doIt(){
    console.log('submit search')
  }
  changeProfileExpansionState(){
    this.profileExpansion.running=true;
    if(this.profileExpansion.isShow){
      this.profileExpansion.class='opacity-0'
      setTimeout(() => {
        this.profileExpansion.class = 'opacity-0 hidden'
      }, 300);
    }else{
      this.profileExpansion.class='opacity-0'
      setTimeout(() => {
        this.profileExpansion.class='opacity-100'
      }, 10);
    }
    this.profileExpansion.isShow = !this.profileExpansion.isShow
  }
  initMode(){
    if(!this.local.getItem('darkMode')){
      this.local.setItem('darkMode', this.darkMode)
    }else {
      this.darkMode = this.local.getData('darkMode')
    }
    this.darkModeChange.emit(this.darkMode)
  }
  changeMode(){
    this.darkMode = !this.darkMode;
    this.local.setData('darkMode', this.darkMode)
    this.darkModeChange.emit(this.darkMode)
  }
}
