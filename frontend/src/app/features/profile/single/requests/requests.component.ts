import { Component, OnInit } from '@angular/core';

interface IRequest{
  name: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  requests:IRequest[]=[
    {
      name: 'ابوالفضل',
      lastName: 'زراعتکار',
      email: 'abolfazlzeraatkar@gmail.com'
    },
    {
      name: 'ابوالفضل',
      lastName: 'زراعتکار',
      email: 'abolfazlzeraatkar@gmail.com'
    },
    {
      name: 'ابوالفضل',
      lastName: 'زراعتکار',
      email: 'abolfazlzeraatkar@gmail.com'
    },
    {
      name: 'ابوالفضل',
      lastName: 'زراعتکار',
      email: 'abolfazlzeraatkar@gmail.com'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
