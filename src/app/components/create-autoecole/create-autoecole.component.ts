import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/helpers/validators';
import { CreateAutoEcoleService } from 'src/app/services/create-auto-ecole.service';

@Component({
  selector: 'app-create-autoecole',
  templateUrl: './create-autoecole.component.html',
  styleUrls: ['./create-autoecole.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateAutoecoleComponent implements OnInit {

  form:FormGroup;
  waitSubmittedForm=false;
  submitedForm=false;

  constructor(private createAutoEcole:CreateAutoEcoleService,
    private formBuilder:FormBuilder,
    private router:Router) { }
  
  ngOnInit(): void {
    this.form=this.formBuilder.group({
      auto_ecole_name:new FormControl(this.createAutoEcole.autoEcole.nom,[Validators.required,Validators.minLength(6)]),
      auto_ecole_localisation: new FormControl(this.createAutoEcole.autoEcole.localisation, [Validators.minLength(6)]),
      auto_ecole_site_web: new FormControl(this.createAutoEcole.autoEcole.sitewebUrl, [Validators.pattern("")]),
      auto_ecole_description: new FormControl(this.createAutoEcole.autoEcole.description,[Validators.nullValidator])
    })
  }

  submitForm()
  {
    this.submitedForm=true;
    if(this.form.invalid) return;

    this.createAutoEcole.autoEcole.nom=this.form.value.nom;
    this.createAutoEcole.autoEcole.localisation=this.form.value.auto_ecole_localisation;
    this.createAutoEcole.autoEcole.sitewebUrl = this.form.value.auto_ecole_site_web;
    this.createAutoEcole.autoEcole.description = this.form.value.auto_ecole_description;
    this.router.navigate(["/start/create-admin-account"]);
  }
}
