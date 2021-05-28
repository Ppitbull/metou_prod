import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AutoEcoleAdmin } from 'src/app/entities/accounts';
import { AutoEcole } from 'src/app/entities/autoecole';
import { PlanBusiness, Tarif, TarifConstante, TarifImage } from 'src/app/entities/tarif';
import { CreateAutoEcoleService } from 'src/app/services/create-auto-ecole/create-auto-ecole.service';

@Component({
  selector: 'app-fin-creation-auto-ecole',
  templateUrl: './fin-creation-auto-ecole.component.html',
  styleUrls: ['./fin-creation-auto-ecole.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FinCreationAutoEcoleComponent implements OnInit {

  admin:AutoEcoleAdmin;
  autoEcole:AutoEcole;
  planTarifaire:Tarif;

  planTarifaireName:String="";
  planColor:String="";
  imgPlan="";

  showPopUp:boolean=false;
  popup_message:String="waite"

  constructor(private createAutoEcole:CreateAutoEcoleService,private router:Router) {
    this.autoEcole=this.createAutoEcole.autoEcole;
    this.admin=this.createAutoEcole.autoEcoleAdminAccount;
    this.planTarifaire=this.createAutoEcole.planTarifaire;
  }
  
  ngOnInit(): void {
    this.planTarifaireName=this.planTarifaire.plan;
    switch(this.planTarifaire.plan)
    {
      case TarifConstante.GRATUIT:
        this.imgPlan=TarifImage.GRATUIT
        this.planColor="#07d5c0";
        break;
      case TarifConstante.DEBUTANT:
        this.imgPlan=TarifImage.DEBUTANT
        this.planColor="#65c600"
        break
      case TarifConstante.BUSINESS:
        this.imgPlan=TarifImage.BUSINESS
        this.planColor="#ff901c"
        break;
      case TarifConstante.ULTIME:
        this.imgPlan=TarifImage.ULTIME
        this.planColor="#ff0071"
        break;
    }
  }

  createAutoEcoleSubmit()
  {
    this.showPopUp=true;
    this.popup_message="Creation du compte administrateur...."
    this.createAutoEcole
    .createAdminAccount()
    .then((result)=>
    {
      this.popup_message="Sauvegarde des parametres administrateur...";
      return this.createAutoEcole.saveAdminAccount()
    })
    .then((result)=>{
      this.popup_message="Parametrage de votre auto-ecole....";
      return this.createAutoEcole.saveAutoEcoleInformation()
    })
    .then((result)=>{
      this.popup_message="Redirection vers votre espace...";
      setTimeout(()=>{
        this.popup_message="";
        this.showPopUp=false;
        this.router.navigate(['/client',this.autoEcole.id.toString()]);
      })
    })
    .catch((result)=>{
      this.popup_message="";
      this.showPopUp=false;
      //show notification erreur
    })
    
  }

}
