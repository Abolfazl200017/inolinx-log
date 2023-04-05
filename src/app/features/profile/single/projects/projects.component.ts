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
