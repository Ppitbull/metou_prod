import { Injectable, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Subject } from 'rxjs';
// import { UserLocalStorageData, UserlocalstorageService } from '../localstorage/userlocalstorage.service';
import { EventService } from '../../events/event.service';
import { User } from 'src/app/entities/accounts';
import { ActionStatus, FireBaseApi } from 'src/app/utils/services/firebase';
import { LocalStorageService } from 'src/app/utils/services/localstorage/localstorage.service';



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
  authLogin(email?: string, password?: string): Promise<any> {

    return new Promise((resolve, reject) =>  {
     
    });
  }

}
