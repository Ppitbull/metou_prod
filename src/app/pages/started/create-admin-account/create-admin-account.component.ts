import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateAutoEcoleService } from 'src/app/shared/services/create-auto-ecole/create-auto-ecole.service';
import { MustMatch } from 'src/app/shared/utils/helpers/validators';

@Component({
  selector: 'app-create-admin-account',
  templateUrl: './create-admin-account.component.html',
  styleUrls: ['./create-admin-account.component.scss']
})
export class CreateAdminAccountComponent implements OnInit {

  form:FormGroup;
  waitSubmittedForm=false;
  submitedForm=false;
  

  constructor(private createAutoEcole:CreateAutoEcoleService,
    private formBuilder:FormBuilder,
    private router:Router) { }
  
  ngOnInit(): void {
    this.form=this.formBuilder.group({
      nom_admin:new FormControl(this.createAutoEcole.autoEcoleAdminAccount.nom,[Validators.required,Validators.minLength(2)]),
      prenom_admin:new FormControl(this.createAutoEcole.autoEcoleAdminAccount.prenom,[Validators.required,Validators.minLength(6)]),
      email_admin: new FormControl(this.createAutoEcole.autoEcoleAdminAccount.email,[Validators.required,Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]{2,6}')]),
      password_admin:new FormControl(this.createAutoEcole.autoEcoleAdminAccount.mdp, [Validators.required,Validators.minLength(8)]),
      confirm_password_admin: new FormControl(this.createAutoEcole.autoEcoleAdminAccount.mdp, [Validators.required,Validators.minLength(8)]),
      tel_admin: new FormControl(this.createAutoEcole.autoEcoleAdminAccount.tel,[Validators.required, Validators.minLength(5)]),
    },
    {
      validator: MustMatch('password_admin','confirm_password_admin')
    })
  }

  submitForm()
  {
    this.submitedForm=true;
    // console.log("Value form ",this.form.value)
    if(this.form.invalid) return;

    this.createAutoEcole.autoEcoleAdminAccount.nom=this.form.value.nom_admin;
    this.createAutoEcole.autoEcoleAdminAccount.prenom=this.form.value.prenom_admin;
    this.createAutoEcole.autoEcoleAdminAccount.email = this.form.value.email_admin;
    this.createAutoEcole.autoEcoleAdminAccount.mdp=this.form.value.password_admin;
    this.createAutoEcole.autoEcoleAdminAccount.tel=this.form.value.tel_admin.internationalNumber;
    this.router.navigate(["/start/choice-pricing-plan"]);
  }
}
