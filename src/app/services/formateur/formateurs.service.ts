import { Injectable } from '@angular/core';
import { ResultAPI } from 'src/app/utils/entities/resultapi';
import { AutoEcoleFormateur } from '../../entities/accounts';
import { AutoEcole } from '../../entities/autoecole';
import { EntityID } from '../../entities/entityid';

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
