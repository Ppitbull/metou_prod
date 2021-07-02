import { Component, Inject, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SimpleLoaderComponent } from 'src/app/components/loader/simple-loader/simple-loader.component';
import { AutoEcoleAdmin } from 'src/app/entities/accounts';
import { AutoEcole } from 'src/app/entities/autoecole';
import { PlanBusiness, Tarif, TarifConstante, TarifImage } from 'src/app/entities/tarif';
import { AutoEcoleProfilService } from 'src/app/services/auto-ecole-profil/auto-ecole-profil.service';
import { CreateAutoEcoleService } from 'src/app/services/create-auto-ecole/create-auto-ecole.service';
import { UserProfilService } from 'src/app/services/user-profil/user-profil.service';
import { ActionStatus } from 'src/app/utils/services/firebase';

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
  @ViewChild("modalTemplate") modalRef: TemplateRef<any>;

  constructor(
    private createAutoEcole:CreateAutoEcoleService,
    private router:Router,
    private dialog:BsModalService,
    private userProfilService:UserProfilService,
    private autoEcoleProfilService:AutoEcoleProfilService) {
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
    const dialogRef = this.dialog.show(this.modalRef)

    this.popup_message="Creation du compte administrateur...."    

    this.createAutoEcole
    .createAdminAccount()
    .then((result:ActionStatus)=>
    {
      this.popup_message="Sauvegarde des parametres administrateur...";
      return this.createAutoEcole.saveAdminAccount()
    })
    .then((result:ActionStatus)=>{
      this.popup_message="Parametrage de votre auto-ecole....";
      return this.createAutoEcole.saveAutoEcoleInformation()
    })
    .then((result:ActionStatus)=>{
      this.popup_message="Redirection vers votre espace...";
      this.userProfilService.setUser(this.createAutoEcole.autoEcoleAdminAccount);
      this.autoEcoleProfilService.setAutoEcole(this.createAutoEcole.autoEcole);
      setTimeout(()=>{
        // this.popup_message="";
        // dialogRef.hide()
        this.showPopUp=false;
        window.location.href="client/dashboard"; //,this.autoEcole.id.toString()
      },1000)
    })
    .catch((result:ActionStatus)=>{
      this.popup_message=result.message;
      // this.showPopUp=false;
      // dialogRef.close()
      console.log("Error ",result)
      //show notification erreur
    })
    
  }

}