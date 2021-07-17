import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EntityID } from 'src/app/entities/entityid';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LoginService } from 'src/app/shared/services/auth/login.service';
import { AutoecoleService } from 'src/app/shared/services/autoecole/autoecole.service';
import { URL_LIST } from 'src/app/shared/utils/enum/url.enum';
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
    private loginService:LoginService,
    public translate:TranslateService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      user_email:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]{2,6}')]),
      mdp:new FormControl("",[Validators.required])
    })
  }

  submit()
  {
    this.submitedForm=true;
    if(!this.form.valid) return;
    this.translate.get("MESSAGE.WAIT_MESSAGE").subscribe((value)=> this.messageResponse=value )
    this.waitResponse=true;

    this.loginService.loginUser(this.form.value.user_email,this.form.value.mdp)
    .then((result:ActionStatus)=>{
      this.waitResponse=false;
      this.translate.get("MESSAGE.SUCCESS_AUTH_MESSAGE").subscribe((value)=>this.messageResponse=value);
      setTimeout(() => this.router.navigate([URL_LIST.autoecole_admin_dashboard]), 200);
    })
    .catch((error:ActionStatus)=>{
      this.waitResponse=false;
      // this.translate.get("MESSAGE.ERROR_AUTH_MESSAGE").subscribe((value)=>this.messageResponse=value)
      this.messageResponse=error.message;
    })
  }

}
