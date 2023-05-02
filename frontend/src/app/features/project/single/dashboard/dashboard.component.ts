import { Component, OnInit } from '@angular/core';
import { IProjectCard } from 'src/app/shared/interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  project: IProjectCard={
    imageUrl: 'https://iranich.com/wp-content/uploads/2019/02/file_1042.jpg',
    name: 'ربومک',
    company: 'نهاد ریاست جمهوری',
    description: 'ساخت وبسایت در حوزه شبکه‌های رباتیک و مکاترونیک',
    startDate: '22-9-1399',
    endDate: '30-4-1401',
    owner: 'مرکز رشد',
    creator: 'مسعود آقایی',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
