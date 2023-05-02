import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnInit {
  states:string[]=['add', 'delete', 'edit']
  state:string = this.states[0]
  constructor() { }

  ngOnInit(): void {
  }

}
