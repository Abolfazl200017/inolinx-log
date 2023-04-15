import { Component, Input, OnInit } from '@angular/core';

interface ICategory{
  name: string;
  choosed: boolean;
  categories: ICategory[];
}
interface ITask {
  name: string;
  completed: boolean;
  subtasks: ITask[];
}

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss']
})
export class CategorySelectComponent implements OnInit {
  @Input() task: ITask = <ITask>{};
  constructor() { }

  ngOnInit(): void {
  }
}
