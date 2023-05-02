import { Component, OnInit } from '@angular/core';
import { IProjectCard } from 'src/app/shared/interface';
// interface IProject{
//   image: string;
//   title: string;
//   url: string;
// }

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: IProjectCard[]=[
    {
      imageUrl: 'https://cdn.zoomg.ir/assets/team/behzad-bahramijo.jpg',
      name: 'ربومک',
      company: 'نهاد ریاست جمهوری',
      description: 'ساخت وبسایت در حوزه شبکه‌های رباتیک و مکاترونیک',
      startDate: '22-9-1399',
      endDate: '30-4-1401',
      owner: 'مرکز رشد',
      creator: 'مسعود آقایی',
    },
    {
      imageUrl: 'https://cdn.zoomg.ir/assets/team/ali-goudarzi.jpg',
      name: 'ربومک',
      company: 'نهاد ریاست جمهوری',
      description: 'ساخت وبسایت در حوزه شبکه‌های رباتیک و مکاترونیک',
      startDate: '22-9-1399',
      endDate: '30-4-1401',
      owner: 'مرکز رشد',
      creator: 'مسعود آقایی',
    },
    {
      imageUrl: 'https://cdn.zoomg.ir/assets/team/Meysam-Khalilzade.jpg',
      name: 'ربومک',
      company: 'نهاد ریاست جمهوری',
      description: 'ساخت وبسایت در حوزه شبکه‌های رباتیک و مکاترونیک',
      startDate: '22-9-1399',
      endDate: '30-4-1401',
      owner: 'مرکز رشد',
      creator: 'مسعود آقایی',
    },
    {
      imageUrl: 'https://cdn.zoomg.ir/assets/team/Sadegh-Tavazoyi.jpg',
      name: 'ربومک',
      company: 'نهاد ریاست جمهوری',
      description: 'ساخت وبسایت در حوزه شبکه‌های رباتیک و مکاترونیک',
      startDate: '22-9-1399',
      endDate: '30-4-1401',
      owner: 'مرکز رشد',
      creator: 'مسعود آقایی',
    },
    {
      imageUrl: 'https://cdn.zoomg.ir/assets/team/Nade-Amraie.jpg',
      name: 'ربومک',
      company: 'نهاد ریاست جمهوری',
      description: 'ساخت وبسایت در حوزه شبکه‌های رباتیک و مکاترونیک',
      startDate: '22-9-1399',
      endDate: '30-4-1401',
      owner: 'مرکز رشد',
      creator: 'مسعود آقایی',
    },
  ];
  // projects: IProject[]=[
  //   {
  //     image: 'https://iranich.com/wp-content/uploads/2019/02/file_1042.jpg',
  //     title: 'پروژه زومیت',
  //     url: ""
  //   },
  //   {
  //     image: 'https://iranich.com/wp-content/uploads/2019/02/file_1042.jpg',
  //     title: 'پروژه زومیت',
  //     url: ""
  //   },
  //   {
  //     image: 'https://iranich.com/wp-content/uploads/2019/02/file_1042.jpg',
  //     title: 'پروژه زومیت',
  //     url: ""
  //   },
  // ];
  constructor() { }

  ngOnInit(): void {
  }

}
