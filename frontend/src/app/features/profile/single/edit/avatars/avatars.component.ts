import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss']
})
export class AvatarsComponent implements OnInit {
  activeNum: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  getImageSource(num: number):string{
    return `assets/img/avatars/avatar-${num}.webp`
  }
}
