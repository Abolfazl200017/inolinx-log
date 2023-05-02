import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  darkMode:boolean=false;
  constructor(
    private local:StorageService
  ) { }

  ngOnInit(): void {
    this.darkMode = this.local.getData('darkMode')?this.local.getData('darkMode'):false;
  }

}
