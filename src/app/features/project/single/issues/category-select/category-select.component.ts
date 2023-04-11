import { Component, Input, OnInit } from '@angular/core';

interface ICategory{
  name: string;
  choosed: boolean;
  categories: ICategory[];
}
export interface Task {
  name: string;
  completed: boolean;
  subtasks: Task[];
}

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss']
})
export class CategorySelectComponent implements OnInit {
  @Input() categories: ICategory[] | undefined;
  task: Task = {
    name: 'root',
    completed: false,
    subtasks: [
      {name: 'Primary', completed: false, subtasks:[
        {name: 'Primary', completed: false, subtasks:[]},
        {name: 'Accent', completed: false, subtasks:[
          {name: 'Primary', completed: false, subtasks:[]},
          {name: 'Accent', completed: false, subtasks:[]},
        ]},
        {name: 'Warn', completed: false, subtasks:[]},
      ]},
      {name: 'Accent', completed: false, subtasks:[]},
      {name: 'Warn', completed: false, subtasks:[]},
    ],
  };
  constructor() { }

  ngOnInit(): void {
  }
  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  checkSubTask(task: Task){
    let completed = true;
    task.subtasks?.forEach(t => {if(!t.completed)completed=false})
    task.completed = completed;
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
  setSubTask(completed: boolean, item: Task){
    item.subtasks?.forEach(t => (t.completed = completed))
  }
}
