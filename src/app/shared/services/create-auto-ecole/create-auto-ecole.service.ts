import { Injectable } from '@angular/core';
import { AutoEcoleAdmin } from 'src/app/entities/accounts';
import { AutoEcole } from 'src/app/entities/autoecole';
import { Tarif } from 'src/app/entities/tarif';
import { ActionStatus } from '../../utils/services/firebase';
import { AuthService } from '../auth/auth.service';
import { AutoecoleService } from '../autoecole/autoecole.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CreateAutoEcoleService {
  autoEcole:AutoEcole=new AutoEcole();
  planTarifaire:Tarif;
  autoEcoleAdminAccount:AutoEcoleAdmin= new AutoEcoleAdmin();
  
  constructor(private authService:AuthService,private userService:UserService,private autoEcoleService:AutoecoleService) { }

  createAdminAccount():Promise<ActionStatus>
  {
    this.autoEcoleAdminAccount.autoEcoleID.setId(this.autoEcole.id.toString())
    return this.authService.createAccount(this.autoEcoleAdminAccount);
  }
  
  saveAdminAccount():Promise<ActionStatus>
  {    
    this.autoEcole.planTarif=this.planTarifaire;
    return this.userService.addUser(this.autoEcoleAdminAccount);
  }
  saveAutoEcoleInformation():Promise<ActionStatus>
  {
    return this.autoEcoleService.saveAutoEcole(this.autoEcole)
  }
  
  
}
