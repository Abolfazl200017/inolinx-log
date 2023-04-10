import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  constructor(
    private formBuilder: UntypedFormBuilder,
  ) { }
  issueTypeFormControl = this.formBuilder.group({
    todo: new UntypedFormControl(true, [Validators.required]),
    inProgress: new UntypedFormControl(true, [Validators.required]),
    done: new UntypedFormControl(true, [Validators.required]),
  })
  ngOnInit(): void {
  }

}
