import { Injectable } from '@angular/core';
import { EntityID } from 'src/app/entities/entityid';
import { ActionStatus, FireBaseApi } from '../../utils/services/firebase';
import { AutoecoleService } from '../autoecole/autoecole.service';
import { AuthService } from './auth.service';
import * as db_branch_builder from "./../../utils/functions/db-branch.builder"
import { UserProfilService } from '../user-profil/user-profil.service';
import { AutoEcoleProfilService } from '../auto-ecole-profil/auto-ecole-profil.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService:AuthService,
    private autoEcoleService:AutoecoleService,
    private autoEcoleProfilService:AutoEcoleProfilService,
    private firebaseApi:FireBaseApi,
    private userProfil:UserProfilService,
  ) { }

  loginUser(email:string,password:string):Promise<ActionStatus>
  {
    return new Promise<ActionStatus>((resolve,reject)=>{
      let currentUserID:EntityID;
      let autoEcoleID:EntityID;
      this.authService.authLogin(email,password)
      .then((result:ActionStatus)=>{
        currentUserID=result.result;
        return this.autoEcoleService.getAutoEcoleIdByUserId(currentUserID);
      })
      .then((result:ActionStatus)=>{
        autoEcoleID=result.result;
        return Promise.all([
          this.userProfil.getCurrentUserProfil(autoEcoleID,currentUserID),
          this.autoEcoleProfilService.getCurrentAutoEcole(autoEcoleID)
        ]);       
      })
      .then((result:ActionStatus[])=>{
          resolve(new ActionStatus())
      })
      .catch((error:ActionStatus)=>reject(error))
    })
  }
}
