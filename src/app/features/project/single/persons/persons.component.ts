import { Component, OnInit } from '@angular/core';
import { IPersonCard } from 'src/app/shared/interface';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  persons: IPersonCard[]=[
    {
      imageUrl: 'https://cdn.zoomg.ir/assets/team/behzad-bahramijo.jpg',
      name: 'سیدعباس',
      lastName: 'موسوی',
      skills: [
        'Front-End'
      ],
      registeryDate: '12-1-1399'
    },
    {
      imageUrl: 'https://cdn.zoomg.ir/assets/team/ali-goudarzi.jpg',
      name: 'مسعود',
      lastName: 'آقایی',
      skills: [
        'CEO',
        'ProductOwner',
        'Front-End',
        'Back-End',
        'SEO',
        'Writing',
      ],
      registeryDate: '20-2-1398'
    },
    {
      imageUrl: 'https://cdn.zoomg.ir/assets/team/Meysam-Khalilzade.jpg',
      name: 'ابوالفضل',
      lastName: 'زراعتکار',
      skills: [],
      registeryDate: '12-1-1399'
    },
    {
      imageUrl: 'https://cdn.zoomg.ir/assets/team/Sadegh-Tavazoyi.jpg',
      name: 'مجتبی',
      lastName: 'اکبری',
      skills: [
        'Back-End',
        'DevOps'
      ],
      registeryDate: '12-1-1399'
    },
    {
      imageUrl: 'https://cdn.zoomg.ir/assets/team/Nade-Amraie.jpg',
      name: 'احمدحسین',
      lastName: 'پازوکی',
      skills: [
        'Writing'
      ],
      registeryDate: '12-1-1399'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
