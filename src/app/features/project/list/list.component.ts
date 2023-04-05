import { Component, OnInit } from '@angular/core';
import { IProjectCard } from 'src/app/shared/interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
