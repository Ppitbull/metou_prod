import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ActionStatus } from 'src/app/shared/utils/services/firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  submitedForm:boolean=false;
  waitResponse:boolean=false;
  messageResponse:String=""
  constructor(
    private authService:AuthService,
    translate:TranslateService
    ) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      user_email:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]{2,6}')]),
      mdp:new FormControl("",[Validators.required])
    })
  }

  submit()
  {
    if(!this.form.valid) return;
    this.authService.authLogin(this.form.value.user_email,this.form.value.mdp)
    .then((result:ActionStatus)=>{

    })
  }

}
