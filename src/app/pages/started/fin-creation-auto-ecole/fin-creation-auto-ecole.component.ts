import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AutoEcoleAdmin } from 'src/app/entities/account';
import { AutoEcole } from 'src/app/entities/autoecole';
import { CreateAutoEcoleService } from 'src/app/services/create-auto-ecole.service';

@Component({
  selector: 'app-fin-creation-auto-ecole',
  templateUrl: './fin-creation-auto-ecole.component.html',
  styleUrls: ['./fin-creation-auto-ecole.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FinCreationAutoEcoleComponent implements OnInit {

  admin:AutoEcoleAdmin;
  autoEcole:AutoEcole;
  constructor(private createAutoEcole:CreateAutoEcoleService) {
    this.autoEcole=this.createAutoEcole.autoEcole;
    this.admin=this.createAutoEcole.autoEcoleAdminAccount;
  }
  
  ngOnInit(): void {
  }

}
