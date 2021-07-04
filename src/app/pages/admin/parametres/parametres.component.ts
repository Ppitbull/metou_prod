import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/accounts';
import { UserProfilService } from 'src/app/shared/services/user-profil/user-profil.service';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.scss']
})
export class ParametresComponent implements OnInit {
  user:User=new User();
  constructor(private userProfilService:UserProfilService) { }

  ngOnInit(): void {
    this.userProfilService.currentUser.subscribe((user:User)=>{
      if(user) this.user=user;
    })
  }

}
