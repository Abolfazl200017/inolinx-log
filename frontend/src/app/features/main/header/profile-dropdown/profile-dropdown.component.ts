import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JwtService } from 'src/app/services/auth/jwt.service';
import { UserService } from 'src/app/services/auth/user.service';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss']
})
export class ProfileDropdownComponent implements OnInit {
  @Output() closeProfile = new EventEmitter<null>();
  profileLink = this.userService.getProfileLink;
  profile = this.userService.getProfile;
  constructor(
    private jwt: JwtService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {}
  profileLinkClicked(){
    this.closeProfile.emit()
  }
  logOut(){
    this.closeProfile.emit()
    this.jwt.logOut()
  }
}
