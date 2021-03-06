import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/entities/accounts';
import { EntityID } from 'src/app/entities/entityid';
import { accountBuilder } from '../../utils/functions/account.builder';
import { ActionStatus } from '../../utils/services/firebase';
import { FirebaseApi } from '../../utils/services/firebase/FirebaseApi';
// import { AuthService } from '../auth/auth.service';

import * as db_branch_builder from "./../../utils/functions/db-branch.builder"


@Injectable({
  providedIn: 'root'
})
export class UserService {

  listUser: Map<String, User> = new Map<string, User>();
  usersSubject: BehaviorSubject<Map<String, User>> = new BehaviorSubject<Map<String, User>>(this.listUser);



  constructor(
    private firebaseApi: FirebaseApi,
  ) {

    // this.eventService.loginEvent.subscribe((user: User) => {
    //   this.newUserHandler();
    // });
  }

  newUserHandler(): Promise<ActionStatus> {
    return new Promise<ActionStatus>((resolve, reject) => {
      this.firebaseApi.getFirebaseDatabase()
        .ref('users')
        .on('child_added', (snapshot) => {
          let user: User = new User();
          user.hydrate(snapshot.val());
          if (!this.listUser.has(user.id.toString())) {
            this.listUser.set(user.id.toString(), user);
            this.usersSubject.next(this.listUser);
          }
        });
    });
  }

  getListUser(): User[] {
    let r: User[] = [];
    this.listUser.forEach((value: User) => r.push(value));
// console.log('les user service ' + this.listUser);
    return r;
  }

  setUser(user: User) {
    // if (!this.listUser.has(user.id.toString())) {  }
    this.listUser.set(user.id.toString(), user)
    this.usersSubject.next(this.listUser);

  }

  // recuperer les informations d'un utilisateur
  getUserById(userID: EntityID,autoEcoleID?:EntityID): Promise<ActionStatus> {
    return new Promise<any>((resolve, reject) => {
      if (this.listUser.has(userID.toString())) {
        let result: ActionStatus = new ActionStatus();
        result.result = this.listUser.get(userID.toString());
        return resolve(result);
      }

      this.firebaseApi.fetch(db_branch_builder.getBranchOfUserInAutoEcole(autoEcoleID,userID))
        .then((value:ActionStatus)=>{
          let user:User=accountBuilder(value.result);
          this.setUser(user);
          value.result=user;
          resolve(value);
        })
        .catch((error:ActionStatus)=>{
          this.firebaseApi.handleApiError(error);
          reject(error);
        })
    });
  }

  
  addUser(user: User): Promise<ActionStatus> {
    return new Promise<ActionStatus>((resolve, reject) => {
      if (this.listUser.has(user.id.toString())) { return resolve(new ActionStatus()); }
      // console.log("User ",user.toString())
      this.firebaseApi.set(db_branch_builder.getBranchOfUserInAutoEcole(user.autoEcoleID,user.id), user.toString())
      .then((result)=>this.firebaseApi.set(db_branch_builder.getBranchOfMappedUsers(user.id),
      {
        user_id:user.id.toString(),
        auto_ecole_id:user.autoEcoleID.toString(),
        email:user.email
      }))
      .then((result) => {
          this.listUser.set(user.id.toString(), user);
          this.usersSubject.next(this.listUser);
          resolve(new ActionStatus());
        }).catch((error) => {
          this.firebaseApi.handleApiError(error);
          reject(error);
        });
    });
  }

  findUsersByKey(key:String,value:String,autoEcoleID:EntityID):Promise<ActionStatus>
  {
    return new Promise<ActionStatus>((resolve,reject)=>{
      this.firebaseApi.getFirebaseDatabase()
      .ref(db_branch_builder.getBranchOfUsersInAutoEcole(autoEcoleID))
      .orderByChild(key)
      .equalTo(value)
      .once("value",(result)=>{
        let data=result.val();
        let users:User[]=[];
        for(let key in data)
        {
          let user:User=accountBuilder(data[key]);
          this.listUser.set(key,user);
          users.push(user);
        }
        let actionResult=new ActionStatus();
        actionResult.result=users;
        resolve(actionResult);
      })
    })
  }

  updateUser(user: User): Promise<ActionStatus> {
    return new Promise<ActionStatus>((resolve, reject) => {
      this.firebaseApi.update(`users/${user.id.toString()}`, user.toString())
        .then((result: ActionStatus) => resolve(result))
        .catch((error: ActionStatus) => {
          this.firebaseApi.handleApiError(error);
          reject(error);
        });
    });
  }

}
