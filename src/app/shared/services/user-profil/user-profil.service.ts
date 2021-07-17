import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/entities/accounts';
import { EntityID } from 'src/app/entities/entityid';
import { accountBuilder } from '../../utils/functions/account.builder';
import { ActionStatus, FireBaseApi } from '../../utils/services/firebase';
import { LocalStorageService } from '../../utils/services/localstorage/localstorage.service';
import { UserService } from '../user/user.service';
import * as db_branch_builder from "./../../utils/functions/db-branch.builder"


@Injectable({
  providedIn: 'root'
})
export class UserProfilService {
  currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(
    private localStorageService:LocalStorageService,
    private firebaseApi:FireBaseApi,
    private userService:UserService
    ) {
    
    this.localStorageService.getSubjectByKey("user_profil").subscribe((userObj:any)=>{
      if(userObj)this.currentUser.next(accountBuilder(userObj))
    })
  }
  setUser(user:User):void
  {
    this.localStorageService.setData("user_profil",user.toString());
  }
    /*
   * resetPassword is used to reset your password.
   */
    resetPassword() {
      // this.toastr.success('Email Sent');
      // this.router.navigate(['/login']);
    }
    getCurrentUserProfil(autoEcoleID:EntityID,userID:EntityID):Promise<ActionStatus>
    {
      return new Promise<ActionStatus>((resolve,reject)=>{
        this.userService.getUserById(userID,autoEcoleID)
        .then((result:ActionStatus)=>{
          this.setUser(result.result);
          result.result=null;
          resolve(result);
        })
        .catch((error:ActionStatus)=>reject(error))
      })
    }
  
    resetDataUser(user)
    {
      // this.localStorageService.setUserData({
      //   isLoggedIn:this.isLoggedIn,
      //   user
      // })
    }
}
