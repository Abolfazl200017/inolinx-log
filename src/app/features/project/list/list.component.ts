import { Component, OnInit } from '@angular/core';

interface IPerson{
  imageUrl: string;
  name: string;
  lastName: string;
  skills: string[];
  registeryDate: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  persons: IPerson[]=[
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
