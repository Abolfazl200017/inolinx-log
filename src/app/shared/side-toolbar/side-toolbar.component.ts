import { Component, Input, OnInit } from '@angular/core';
import { ISideToolbar } from '../interface';

@Component({
  selector: 'app-side-toolbar',
  templateUrl: './side-toolbar.component.html',
  styleUrls: ['./side-toolbar.component.scss']
})
export class SideToolbarComponent implements OnInit {
  isFull:boolean=false;
  onHover:boolean=true;
  @Input() config: ISideToolbar=<ISideToolbar>{};
  constructor() { }

  ngOnInit(): void {
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
}
