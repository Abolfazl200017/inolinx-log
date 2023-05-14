import { Component, Input, OnInit } from '@angular/core';
import { ISideToolbar } from '../../interface';
import { ThemePalette } from '@angular/material/core';

interface ILink{
  link:string[]|string;
  name:string;
  icon:string;
  needRoot: boolean;
  needOwner: boolean;
}

@Component({
  selector: 'app-side-toolbar',
  templateUrl: './side-toolbar.component.html',
  styleUrls: ['./side-toolbar.component.scss']
})
export class SideToolbarComponent implements OnInit {
  isFull:boolean=false;
  onHover:boolean=true;
  // tabItems = [{link:'first', icon:'done'},{link:'first', icon:'error'},{link:'first', icon:'dashboard'},{link:'first', icon:'edit'}]
  background: ThemePalette = undefined;
  @Input() config: ISideToolbar=<ISideToolbar>{};
  activeLink:any;
  constructor() { }

  ngOnInit(): void {
    this.activeLink = this.config.links[0]
  }
  setIsFullTrue(){
    this.onHover=true;
    setTimeout(() => {
      this.isFull=this.onHover?true:false;
    }, 300);
  }
  setIsFullFalse(){
    this.onHover=false;
    this.isFull=false;
  }
  canShowLink(link:ILink):boolean{
    if(!link.needRoot){
      return !(link.needOwner && !this.config.isOwner)
    }else
      return true
  }
}
