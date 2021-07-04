import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/accounts';
import { UserProfilService } from 'src/app/shared/services/user-profil/user-profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  user:User=new User();
  constructor(private userProfilService:UserProfilService) { }

  ngOnInit(): void {
    this.userProfilService.currentUser.subscribe((user:User)=>{
      if(user) this.user=user;
    })
  }

}
