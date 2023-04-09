import { Component, Input, OnInit } from '@angular/core';

interface ICategory{
  name: string;
  categories: ICategory[];
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  isStateOpen:boolean=false;
  editable:boolean=true;
  @Input() category: ICategory = {
    name: '',
    categories:[]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
