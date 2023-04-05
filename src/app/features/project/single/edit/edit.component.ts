import { Component } from '@angular/core';
import { INewProject } from 'src/app/shared/interface/index';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  formData:INewProject={
    isNew: false,
    title: undefined,
    urlTitle: undefined,
    owner: undefined,
    info: undefined,
    startDate: undefined,
    endDate: undefined
  };
  constructor(){}
}
