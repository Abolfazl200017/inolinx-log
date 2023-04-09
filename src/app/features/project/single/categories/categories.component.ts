import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: any=[
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
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
