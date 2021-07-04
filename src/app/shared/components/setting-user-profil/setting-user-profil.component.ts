import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/entities/accounts';

@Component({
  selector: 'app-setting-user-profil',
  templateUrl: './setting-user-profil.component.html',
  styleUrls: ['./setting-user-profil.component.scss']
})
export class SettingUserProfilComponent implements OnInit {
  @Input() user:User=new User();
  
  submitedForm:boolean=false

  form:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form=new FormGroup({
      "nom":new FormControl(this.user.nom),
      "prenom":new FormControl(this.user.prenom),
      "email":new FormControl(this.user.email),
      "tel":new FormControl(this.user.tel)
    })
  }

}
