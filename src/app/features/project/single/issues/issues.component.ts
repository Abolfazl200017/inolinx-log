import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';

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
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  categories: ICategory={
    name: 'parent',
    choosed: true,
    categories:
    [
      {
        name: 'زیرمجموعه اول',
        choosed: true,
        categories: [
          {
            name: 'زیرمجموعه سوم',
            choosed: true,
            categories: []
          },
          {
            name: 'زیرمجموعه چهارم',
            choosed: true,
            categories: [
              {
                name: 'زیرمجموعه پنجم',
                choosed: true,
                categories: [],
              },
              {
                name: 'زیرمجموعه ششم',
                choosed: true,
                categories: []
              }
            ]
          }
        ]
      },
      {
        name: 'زیرمجموعه دوم',
        choosed: true,
        categories: []
      },
      {
        name: 'زیرمجموعه چهارم',
        choosed: true,
        categories: [
          {
            name: 'زیرمجموعه پنجم',
            choosed: true,
            categories: [],
          },
          {
            name: 'زیرمجموعه ششم',
            choosed: true,
            categories: []
          }
        ]
      }
    ]
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
  types = {
    todo: true,
    inprogress: true,
    done: true,
  }
  
  constructor() { }
  ngOnInit(): void {
  }
}
