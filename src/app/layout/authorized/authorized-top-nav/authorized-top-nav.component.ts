import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/accounts';
import { UserProfilService } from 'src/app/shared/services/user-profil/user-profil.service';


@Component({
  selector: 'app-authorized-top-nav',
  templateUrl: './authorized-top-nav.component.html',
  styleUrls: ['./authorized-top-nav.component.scss']
})
export class AuthorizedTopNavComponent implements OnInit {
  user:User=new User();
  constructor(private userProfilService:UserProfilService) { }

  ngOnInit(): void {
    this.userProfilService.currentUser.subscribe((user:User)=>{
      if(user) this.user=user;
    })
  }

}
