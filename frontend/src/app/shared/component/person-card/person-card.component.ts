import { Component, Input, OnInit } from '@angular/core';
import { IPersonCard } from '../../interface';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() persons!: IPersonCard[];
  @Input() customClass:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
