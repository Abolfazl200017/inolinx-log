import { Component, OnInit } from '@angular/core';

interface IProject{
  image: string;
  title: string;
  url: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: IProject[]=[
    {
      image: 'https://iranich.com/wp-content/uploads/2019/02/file_1042.jpg',
      title: 'پروژه زومیت',
      url: ""
    },
    {
      image: 'https://iranich.com/wp-content/uploads/2019/02/file_1042.jpg',
      title: 'پروژه زومیت',
      url: ""
    },
    {
      image: 'https://iranich.com/wp-content/uploads/2019/02/file_1042.jpg',
      title: 'پروژه زومیت',
      url: ""
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
