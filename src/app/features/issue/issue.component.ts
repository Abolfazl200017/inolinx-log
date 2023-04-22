import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';

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
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
  editable:boolean=false;
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
      img:'https://cdn.zoomg.ir/assets/team/behzad-bahramijo.jpg',
    },
    {
      id:'2',
      value: 'پروژه دوم',
      img: 'https://cdn.zoomg.ir/assets/team/ali-goudarzi.jpg',
    },
    {
      id:'3',
      value: 'پروژه سوم',
      img: 'https://cdn.zoomg.ir/assets/team/Sadegh-Tavazoyi.jpg',
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
      img: 'https://cdn.zoomg.ir/assets/team/ma-jalali.jpg',
    },
    {
      id:'user-2',
      value:'عباس',
      img: 'https://cdn.zoomg.ir/assets/team/Meysam-Khalilzade.jpg',
    },
    {
      id:'user-3',
      value:'مجتبی',
      img: 'https://cdn.zoomg.ir/assets/team/Afshin-Pirozi.jpg',
    },
    {
      id:'user-4',
      value:'پسرخاله',
      img: 'https://cdn.zoomg.ir/assets/team/Nade-Amraie.jpg',
    },
    {
      id:'user-5',
      value:'محمدامین',
      img: 'https://cdn.zoomg.ir/assets/team/Sadegh-Tavazoyi.jpg',
    },
  ]
  constructor(
    private formBuilder: UntypedFormBuilder,
  ) { }

  issueGroup = this.formBuilder.group({
    title: new UntypedFormControl('', [Validators.required]),
    type: new UntypedFormControl(),
    project: new UntypedFormControl(),
    categories: new UntypedFormControl(),
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
