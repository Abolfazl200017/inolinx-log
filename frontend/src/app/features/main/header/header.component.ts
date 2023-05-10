import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../../../services/storage/storage.service';
import { ProfileService } from 'src/app/services/api/profile.service';
import { of } from 'rxjs';
import { IProfile } from 'src/app/shared/interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShowProfile:boolean=false;
  darkMode:boolean=false;
  profileExpansion:{isShow:boolean;running:boolean;class:string}={isShow:false, running:false,class:'opacity-0 hidden'};
  isShow:boolean=false;
  @Output() darkModeChange: EventEmitter<boolean> = new EventEmitter();
  @Output() menu:EventEmitter<null> = new EventEmitter();
  @Output() closeNav:EventEmitter<null> = new EventEmitter();
  profile = this.profileService.getProfile;
  constructor(
    private local:StorageService,
    private profileService: ProfileService,
  ){}
  ngOnInit():void {
  }
  ngAfterViewInit():void {
    setTimeout(() => {
      this.initMode();
    });
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
  route(){
    this.closeNav.emit()
  }
}
