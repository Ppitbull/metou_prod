import { Injectable } from '@angular/core';
import { AutoEcole } from 'src/app/entities/autoecole';
import { EntityID } from 'src/app/entities/entityid';
import { DbBranch } from '../../utils/enum/db-branch.enum';
import { ActionStatus } from '../../utils/services/firebase';
import { FirebaseApi } from '../../utils/services/firebase/FirebaseApi';

import * as db_branch_builder from "./../../utils/functions/db-branch.builder"

@Injectable({
  providedIn: 'root'
})
export class AutoecoleService {

  constructor(private firebaseApi:FirebaseApi) { }

  saveAutoEcole(autoecole:AutoEcole):Promise<ActionStatus>
  {
    return new Promise<ActionStatus>((resolve,reject)=>{
      this.firebaseApi.set(db_branch_builder.getBranchOfAutoEcole(autoecole.id),autoecole.toString())
      .then((result:ActionStatus)=>resolve(result))
      .catch((error)=>{
        this.firebaseApi.handleApiError(error);
        reject(error)
      })
    })
  }

  getAutoEcoleIdByUserId(userID:EntityID):Promise<ActionStatus>
  {
    return new Promise<ActionStatus>((resolve,reject)=>{
      this.firebaseApi.fetchOnce(db_branch_builder.getBranchOfMappedUsers(userID))
      .then((result:ActionStatus)=>{
        let autoEcoleID=new EntityID();
        autoEcoleID.setId(result.result.auto_ecole_id);
        result.result=autoEcoleID;
        resolve(result);
      })
      .catch((error:ActionStatus)=>{
        this.firebaseApi.handleApiError(error);
        reject(error);
      })
    })
  }
  getAutoEcoleById(autoEcoleID:EntityID):Promise<ActionStatus>
  {
    return new Promise<ActionStatus>((resolve,reject)=>{
      this.firebaseApi.fetchOnce(db_branch_builder.getBranchOfAutoEcole(autoEcoleID))
      .then((value:ActionStatus)=>{
        let autoEcole:AutoEcole=new AutoEcole();
        autoEcole.hydrate(value.result);
        value.result=autoEcole;
        resolve(value)
      })
      .catch((error:ActionStatus)=>{
        this.firebaseApi.handleApiError(error);
        reject(error)
      })
    })
  }
}
