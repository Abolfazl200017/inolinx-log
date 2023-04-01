import { Component, OnInit } from '@angular/core';

interface IIssueTypes{
  id:number;
  value:string;
}
interface IProjectType{
  id:string;
  value:string;
}
interface ICategoryType{
  id:string;
  value:string;
}
interface IPersonType{
  id:string;
  value:string;
}

@Component({
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
  output:any;
  issueTypes:IIssueTypes[]=[
    {
      id: 0,
      value: 'حل شده'
    },
    {
      id: 1,
      value: 'در حال انجام'
    },
    {
      id: 2,
      value: 'حل نشده'
    }
  ]
  parentProjectList:IProjectType[] = [
    {
      id:'1',
      value: 'پروژه اول'
    },
    {
      id:'2',
      value: 'پروژه دوم'
    },
    {
      id:'3',
      value: 'پروژه سوم'
    }
  ]
  categoryTypes:ICategoryType[] = [
    {
      id:'one',
      value:'زیردسته اول'
    },
    {
      id:'one',
      value:'زیردسته دوم'
    },
    {
      id:'one',
      value:'زیردسته سوم'
    },
    {
      id:'one',
      value:'زیردسته چهارم'
    },
  ]
  personList:IPersonType[] = [
    {
      id:'user-1',
      value:'ابوالفضل'
    },
    {
      id:'user-2',
      value:'عباس'
    },
    {
      id:'user-3',
      value:'مجتبی'
    },
    {
      id:'user-4',
      value:'پسرخاله'
    },
    {
      id:'user-5',
      value:'محمدامین'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
