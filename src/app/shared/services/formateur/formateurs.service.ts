import { Injectable } from '@angular/core';
import { AutoEcoleFormateur } from 'src/app/entities/accounts';
import { AutoEcole } from 'src/app/entities/autoecole';
import { EntityID } from 'src/app/entities/entityid';
import { ResultAPI } from '../../utils/entities/resultapi';

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
