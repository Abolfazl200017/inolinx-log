import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/api/profile.service';
import { IPersonCard } from 'src/app/shared/interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  person: IPersonCard={
      imageUrl: 'https://cdn.zoomg.ir/assets/team/behzad-bahramijo.jpg',
      name: 'سیدعباس',
      lastName: 'موسوی',
      skills: [
        'Front-End',
        'DevOps'
      ],
      registeryDate: '12-1-1399'
  }
  constructor(
  ) {

  }

  ngOnInit(): void {

  }

}
