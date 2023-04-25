import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-card',
  templateUrl: './log-card.component.html',
  styleUrls: ['./log-card.component.scss']
})
export class LogCardComponent implements OnInit {
  @Input() state: string='';
  constructor() { }

  ngOnInit(): void {
  }

}
