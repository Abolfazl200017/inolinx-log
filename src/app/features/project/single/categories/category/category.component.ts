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
  editable:boolean[]=new Array(100).fill(true);
  delete:boolean[]=new Array(100).fill(false);
  add:boolean[]= new Array(100).fill(false);
  @Input() category: ICategory = {
    name: '',
    categories:[]
  };
  constructor() { }

  ngOnInit(): void {}
}
