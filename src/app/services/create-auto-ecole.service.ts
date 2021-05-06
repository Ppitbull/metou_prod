import { Injectable } from '@angular/core';
import { AutoEcoleAdmin } from '../entities/account';
import { ActionResult } from '../entities/ActionResult';
import { AutoEcole } from '../entities/autoecole';
import { Tarif } from '../entities/tarif';

@Injectable({
  providedIn: 'root'
})
export class CreateAutoEcoleService {
  autoEcole:AutoEcole=new AutoEcole();
  planTarifaire:Tarif;
  autoEcoleAdminAccount:AutoEcoleAdmin= new AutoEcoleAdmin();
  
  constructor() { }

  newAutoEcole():Promise<ActionResult>
  {
    return new Promise<ActionResult>((resole,reject)=>{
      
    })
  }
}
