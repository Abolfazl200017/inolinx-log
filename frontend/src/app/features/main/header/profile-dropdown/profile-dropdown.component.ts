import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  profileLink:string[]=[]
  imageLogo:string|undefined;
  name:string|undefined;
  constructor(
    private jwt: JwtService,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.profileLink = this.profileService.getProfileLink();
    let profile = this.profileService.getProfile()
    this.imageLogo = profile.image?profile.image:'assets/img/default_profile.jpg';
    this.name = `${profile.first_name} ${profile.last_name}`
  }
  profileLinkClicked(){
    this.closeProfile.emit()
  }
  logOut(){
    this.closeProfile.emit()
    this.jwt.logOut()
  }
}
