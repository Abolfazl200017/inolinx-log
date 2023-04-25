import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  pageEvent?:PageEvent;
  states:string[]=['signup', 'signup', 'signup', 'comment', 'crub', 'comment', 'comment', 'crub', 'crub', 'crub']
  constructor() { }

  ngOnInit(): void {
  }
}
