import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JwtService } from 'src/app/services/auth/jwt.service';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss']
})
export class ProfileDropdownComponent implements OnInit {
  @Output() closeProfile = new EventEmitter<null>();
  constructor(
    private jwt: JwtService,
  ) { }

  ngOnInit(): void {
  }
  profileLinkClicked(){
    this.closeProfile.emit()
    this.jwt.logOut()
  }
}
