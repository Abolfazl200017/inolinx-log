import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-card',
  templateUrl: './crud-card.component.html',
  styleUrls: ['./crud-card.component.scss']
})
export class CrudCardComponent implements OnInit {
  types:string[]=['add', 'delete', 'edit']
  type:string=this.types[0]
  bases:string[]=['project', 'issue']
  base:string = this.bases[1]
  constructor() { }

  ngOnInit(): void {
  }

}
