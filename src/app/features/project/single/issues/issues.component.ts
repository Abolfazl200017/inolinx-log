import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';

interface ICategory{
  name: string;
  choosed: boolean;
  categories: ICategory[];
}

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  filterOpacity:string='opacity-0'
  isShowFilter:boolean=true;
  constructor() { }
  ngOnInit(): void {
  }
  changeFilterState(){
    if(this.isShowFilter){
      this.isShowFilter = false;
      setTimeout(() => {
        this.filterOpacity = 'opacity-100'
      }, 10);
    }else{
      this.filterOpacity = 'opacity-0'
      setTimeout(() => {
        this.isShowFilter = true
      }, 150);
    }
  }
}
