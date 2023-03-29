import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  darkMode:boolean=false;
  showFiller = false;
  mainHeight:string='';
  @ViewChild('header') header:ElementRef|undefined;
  constructor(private local:StorageService){}

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.setMainHeight()
  }
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
