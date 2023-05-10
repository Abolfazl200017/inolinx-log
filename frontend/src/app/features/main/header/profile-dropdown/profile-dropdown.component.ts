import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfileService } from 'src/app/services/api/profile.service';
import { JwtService } from 'src/app/services/auth/jwt.service';
import { IProfile } from 'src/app/shared/interface';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss']
})
export class ProfileDropdownComponent implements OnInit {
  @Output() closeProfile = new EventEmitter<null>();
  profileLink = this.profileService.getProfileLink;
  profile = this.profileService.getProfile;
  constructor(
    private jwt: JwtService,
    private profileService: ProfileService,
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
