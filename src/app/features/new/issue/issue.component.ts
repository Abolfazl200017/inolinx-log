import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';

interface IIssueTypes{
  id:number;
  value:string;
}
interface IProjectType{
  id:string;
  value:string;
  img:string|undefined;
}
interface ICategoryType{
  id:string;
  value:string;
}
interface IPersonType{
  id:string;
  value:string;
  img:string|undefined;
}

@Component({
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
  selectedPersons:any;
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
      value: 'پروژه اول',
      img:'https://inolinx.com/katibe/biotechno',
    },
    {
      id:'2',
      value: 'پروژه دوم',
      img: 'https://inolinx.com/assets/image/job1.webp',
    },
    {
      id:'3',
      value: 'پروژه سوم',
      img: 'https://inolinx.com/assets/image/site-logo.webp',
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
      value:'ابوالفضل',
      img: 'https://anbare.inolinx.com/media/user_profile_photo/1ZNRJE9Q25.jpg',
    },
    {
      id:'user-2',
      value:'عباس',
      img: 'https://anbare.inolinx.com/media/user_profile_photo/109748234676_59856_cropped.webp',
    },
    {
      id:'user-3',
      value:'مجتبی',
      img: 'https://anbare.inolinx.com/media/post/logo/660071323815_5273_cropped.webp',
    },
    {
      id:'user-4',
      value:'پسرخاله',
      img: 'https://anbare.inolinx.com/media/post/logo/890677703778_9681_cropped.png',
    },
    {
      id:'user-5',
      value:'محمدامین',
      img: 'https://anbare.inolinx.com/media/post/logo/902198328232_6493_cropped.png',
    },
  ]
  constructor(
    private formBuilder: UntypedFormBuilder,
  ) { }
  issueGroup = this.formBuilder.group({
    selectedPersons: new UntypedFormControl()
  })
  ngOnInit(): void {
  }
  getSelectedPersons(){
    let selectedPerson = this.issueGroup.controls['selectedPersons'].value;
    let selectedPersonObjects:any=[];
    selectedPerson.forEach((sp:string) => {
      selectedPersonObjects.push(this.personList.find((person)=>person.id == sp))
    });
    this.selectedPersons = selectedPersonObjects;
    return selectedPersonObjects;
  }
}
