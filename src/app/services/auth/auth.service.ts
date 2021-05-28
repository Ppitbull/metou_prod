import { Injectable, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Subject } from 'rxjs';
// import { UserLocalStorageData, UserlocalstorageService } from '../localstorage/userlocalstorage.service';
import * as EventEmitter from 'events';
import { EventService } from '../../events/event.service';
import { User } from 'src/app/entities/accounts';
import { ActionStatus, FireBaseApi } from 'src/app/utils/services/firebase';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User = new User();
  isLoggedIn: boolean = false;
  currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(this.currentUser);

  constructor(
    private router: Router,
    // private api: ApiService,
    // private toastr: ToastrService,
    // private user: UserService,
    // private localStorageService:UserlocalstorageService,
    private firebaseApi:FireBaseApi,
    private eventService:EventService
  ) {

    // this.registResult = false;
    // this.loginResult = false;
    // this.localStorageService.dataUser.subscribe((userData:UserLocalStorageData)  => {
    //   this.isLoggedIn=userData.isLoggedIn;
    //   this.currentUser=userData.user;
    // })

  }

  /*
   * resetPassword is used to reset your password.
   */
  resetPassword() {
    // this.toastr.success('Email Sent');
    this.router.navigate(['/login']);
  }

  resetDataUser(user)
  {
    // this.localStorageService.setUserData({
    //   isLoggedIn:this.isLoggedIn,
    //   user
    // })
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
