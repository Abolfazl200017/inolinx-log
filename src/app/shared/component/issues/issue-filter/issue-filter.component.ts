import { Component, OnInit } from '@angular/core';
interface ITask {
  name: string;
  completed: boolean;
  subtasks: ITask[];
}
@Component({
  selector: 'app-issue-filter',
  templateUrl: './issue-filter.component.html',
  styleUrls: ['./issue-filter.component.scss']
})
export class IssueFilterComponent implements OnInit {
  types = {
    todo: true,
    inprogress: true,
    done: true,
    all: true,
  }
  task: ITask = {
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
  setAll(){
    this.types.all = !this.types.all;
    if(this.types.all){
      this.types.todo=true;
      this.types.inprogress=true;
      this.types.done=true;
    }
  }
  checkAll(){
    if(this.types.todo && this.types.inprogress && this.types.done){
      this.types.all = true;
    }
  }
  setTodo(){
    this.types.todo = !this.types.todo;
    if(!this.types.todo){
      this.types.all=false;
    }
    // this.checkAll();
  }
  setInprogress(){
    this.types.inprogress = !this.types.inprogress;
    if(!this.types.inprogress){
      this.types.all=false;
    }
    // this.checkAll();
  }
  setDone(){
    this.types.done = !this.types.done;
    if(!this.types.done){
      this.types.all=false;
    }
    // this.checkAll();
  }
}
