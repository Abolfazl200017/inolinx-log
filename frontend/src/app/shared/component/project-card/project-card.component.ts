import { Component, Input, OnInit } from '@angular/core';
import { IProjectCard } from '../../interface';
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() projects!: IProjectCard[];
  @Input() customClass:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
