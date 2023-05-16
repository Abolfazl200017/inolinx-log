import { Component } from '@angular/core';
import { GlobalService } from './services/global/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(
    private global: GlobalService,
  ){}
  isShowLoading(){
    return this.global.loading
  }
}