import { Injectable, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Subject } from 'rxjs';
import { User } from 'src/app/entities/accounts';
import { EntityID } from 'src/app/entities/entityid';
import { EventService } from '../../utils/services/events/event.service';
import { FireBaseApi, ActionStatus } from '../../utils/services/firebase';
import { LocalStorageService } from '../../utils/services/localstorage/localstorage.service';
// import { UserLocalStorageData, UserlocalstorageService } from '../localstorage/userlocalstorage.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    // private api: ApiService,
    // private toastr: ToastrService,
    // private user: UserService,
    private localStorageService:LocalStorageService,
    private firebaseApi:FireBaseApi,
    private eventService:EventService
  ) {

    // this.registResult = false;
    // this.loginResult = false;    

  }

  /*
   * logOut function is used to sign out .
   */
  logOut() {
    // this.localStorageService.clearData();
    // this.toastr.success('You have been successfully logged out!');
    this.router.navigate(['login']);
  }

  /**
   *  Create an account on the drupal platform
   *
   */
  createAccount(user:User): Promise<ActionStatus> {

    return new Promise((resolve, reject) => {
      this.firebaseApi.createUserApi(user.email.toString(), user.mdp.toString())
        .then((result:ActionStatus) => {
          user.dateCreation = (new Date()).toISOString();
          user.id=result.result.uid;
          result.result=user;
          resolve(result);
        })
        .catch(e => {
          this.firebaseApi.handleApiError(e);
          reject(e)
        })      
    });

  }


  // Login into your account
  authLogin(email?: string, password?: string): Promise<ActionStatus> {

    return new Promise((resolve, reject) =>  {
      this.firebaseApi.signInApi(email,password)
      .then((result:ActionStatus)=>{
        let userID:EntityID=new EntityID();
        userID.setId(result.result.user.uid)
        result.result=userID;
        resolve(result);
      })
      .catch((error:ActionStatus)=>{
        this.firebaseApi.handleApiError(error);
        reject(error);
      })
    });
  }
}
