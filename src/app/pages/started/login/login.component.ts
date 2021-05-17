import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      autoecole_nom:new FormControl("",[Validators.required]),
      mdp:new FormControl("",[Validators.required])
    })
  }

  submit()
  {

  }

}
