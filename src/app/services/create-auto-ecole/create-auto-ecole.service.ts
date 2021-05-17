import { Injectable } from '@angular/core';
// import { ActionStatus } from 'src/app/utils/services/firebase';
import { AutoEcoleAdmin } from '../../entities/accounts';
import { AutoEcole } from '../../entities/autoecole';
import { Tarif } from '../../entities/tarif';

@Injectable({
  providedIn: 'root'
})
export class CreateAutoEcoleService {
  autoEcole:AutoEcole=new AutoEcole();
  planTarifaire:Tarif;
  autoEcoleAdminAccount:AutoEcoleAdmin= new AutoEcoleAdmin();
  
  constructor() { }

  newAutoEcole():Promise<any>
  {
    //ActionStatus
    return new Promise<any>((resole,reject)=>{
      
    })
  }
}
