import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-main',
  templateUrl: './issue-main.component.html',
  styleUrls: ['./issue-main.component.scss']
})
export class IssueMainComponent implements OnInit {
  list=[1,2,3,4,5,6,]
  constructor() { }

  ngOnInit(): void {
  }

}
