import { Component, OnInit } from '@angular/core';

interface ICategory{
  name: string;
  categories: ICategory[];
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
