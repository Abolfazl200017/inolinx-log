import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';

interface ICategory{
  name: string;
  categories: ICategory[];
}

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  categories: ICategory={

    name: 'parent',
    categories:
    [
      {
        name: 'زیرمجموعه اول',
        categories: [
          {
            name: 'زیرمجموعه سوم',
            categories: []
          },
          {
            name: 'زیرمجموعه چهارم',
            categories: [
              {
                name: 'زیرمجموعه پنجم',
                categories: [],
              },
              {
                name: 'زیرمجموعه ششم',
                categories: []
              }
            ]
          }
        ]
      },
      {
        name: 'زیرمجموعه دوم',
        categories: []
      },
      {
        name: 'زیرمجموعه چهارم',
        categories: [
          {
            name: 'زیرمجموعه پنجم',
            categories: [],
          },
          {
            name: 'زیرمجموعه ششم',
            categories: []
          }
        ]
      }
    ]
  }
  constructor(
    private formBuilder: UntypedFormBuilder,
  ) { }
  issueTypeFormControl = this.formBuilder.group({
    todo: new UntypedFormControl(true, [Validators.required]),
    inProgress: new UntypedFormControl(true, [Validators.required]),
    done: new UntypedFormControl(true, [Validators.required]),
  })
  ngOnInit(): void {
  }
}
