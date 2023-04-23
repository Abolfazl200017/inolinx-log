import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss']
})
export class ProfileDropdownComponent implements OnInit {
  @Output() closeProfile = new EventEmitter<null>();
  constructor() { }

  ngOnInit(): void {
  }
  profileLinkClicked(){
    this.closeProfile.emit()
  }
}
