import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  isFull:boolean=false;
  onHover:boolean=true;
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
