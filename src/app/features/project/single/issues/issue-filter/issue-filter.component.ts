import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

interface ITask {
  name: string;
  completed: boolean;
  subtasks: ITask[];
}

@Component({
  selector: 'app-issue-filter',
  templateUrl: './issue-filter.component.html',
  styleUrls: ['./issue-filter.component.scss'],
})
export class IssueFilterComponent implements OnInit {
  types = {
    todo: true,
    inprogress: true,
    done: true,
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

}
