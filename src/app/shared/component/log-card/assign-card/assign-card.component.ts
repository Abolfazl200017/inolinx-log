import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-card',
  templateUrl: './assign-card.component.html',
  styleUrls: ['./assign-card.component.scss']
})
export class AssignCardComponent implements OnInit {
  states:string[]=['add', 'remove']
  state:string='remove';
  bases:string[]=['project', 'issue']
  base:string='issue'
  constructor() { }

  ngOnInit(): void {
  }

}
