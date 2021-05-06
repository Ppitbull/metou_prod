import { Injectable } from '@angular/core';
import { AutoEcoleFormateur } from '../entities/account';
import { AutoEcole } from '../entities/autoecole';
import { EntityID } from '../entities/entityid';
import { ResultAPI } from '../utils/resultapi';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor() { }

  newFormateur(formateur:AutoEcoleFormateur,autoEcole:AutoEcole):Promise<ResultAPI>
  {
    return new Promise<ResultAPI>((resolve,reject)=>{

    })
  }
  
  removeFormateur(formateurID:EntityID,autoEcole:AutoEcole):Promise<ResultAPI>
  {
    return new Promise<ResultAPI>((resolve,reject)=>{
      
    })
  }

  becomeFormateur(formateur:AutoEcoleFormateur,autoEcole:AutoEcole):Promise<ResultAPI>
  {
    return new Promise<ResultAPI>((resolve,reject)=>{
      
    })
  }
}
