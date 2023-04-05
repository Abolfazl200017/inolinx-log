import { Component, Input, OnInit } from '@angular/core';

interface IProject{
  imageUrl: string;
  name: string;
  lastName: string;
  skills: string[];
  registeryDate: string;
}

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() projects!: IProject[];
  @Input() customClass:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
