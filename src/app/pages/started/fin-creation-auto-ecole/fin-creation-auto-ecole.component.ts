import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  constructor(private createAutoEcole:CreateAutoEcoleService) {
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
    this.createAutoEcole
    .newAutoEcole()
    .then((result)=>
    {

    })
    .catch((result)=>{

    })
  }

}
