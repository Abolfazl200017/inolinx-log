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
