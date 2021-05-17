import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { PlanBusiness, PlanDebutant, PlanGratuit, PlanUltime, Tarif, TarifConstante } from 'src/app/entities/tarif';
import { CreateAutoEcoleService } from 'src/app/services/create-auto-ecole/create-auto-ecole.service';

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PricingPlanComponent implements OnInit {

  planTarifaire:Tarif;
  constructor(private createAutoEcoleService:CreateAutoEcoleService,
    private router:Router) { }

  ngOnInit(): void {
  }
  choixTarif(choix)
  {
    switch(choix)
    {
      case TarifConstante.GRATUIT:
        this.planTarifaire=new PlanGratuit();
        break;
      case TarifConstante.DEBUTANT:
        this.planTarifaire=new PlanDebutant()
        break
      case TarifConstante.BUSINESS:
        this.planTarifaire=new PlanBusiness();
        break;
      case TarifConstante.ULTIME:
        this.planTarifaire=new PlanUltime();
        break;
    }
    this.createAutoEcoleService.planTarifaire=this.planTarifaire;
    console.log(this.createAutoEcoleService.planTarifaire)
    this.router.navigate(['/start/end-setting'])
  }

}
