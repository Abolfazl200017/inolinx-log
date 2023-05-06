import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  darkMode:boolean=false;
  showFiller = false;
  mainHeight:string='';
  @ViewChild('header') header:ElementRef|undefined;
  constructor(
    private local:StorageService,
    private global:GlobalService,
  ){}

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.setMainHeight()
    });
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
  isShowLoading(){
    return this.global.loading
  }
  change(){
    this.global.changeLoading()
  }
}
