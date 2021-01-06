import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   usrProfile:Profile


  constructor(private ps:ProfileService) { }

  ngOnInit(): void {
   this.ps.getUserProfile(sessionStorage.getItem('TOKEN')).subscribe(res=>this.usrProfile=res);
  }

}
