import { Injectable, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { ApiService } from '../api/api.service';
// import { UserService } from '../user/user.service';
// import { Provider, User } from '../../entity/provider';
import { BehaviorSubject, Subject } from 'rxjs';
// import { UserLocalStorageData, UserlocalstorageService } from '../localstorage/userlocalstorage.service';
import * as EventEmitter from 'events';
import { EventService } from '../events/event.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // currentUser:  = new Provider();
  // currentUserSubject: BehaviorSubject<>=new BehaviorSubject<Provider>(this.currentUser);
  isLoggedIn = false;

  constructor(
    // private firebaseAuth: AngularFireAuth,
    private router: Router,
    // private api: ApiService,
    // private toastr: ToastrService,
    // private user: UserService,
    // private localStorageService:UserlocalstorageService,
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
  createAccount(data): Promise<any> {

    return new Promise((resolve, reject) => {

      
    });

  }


  // Login into your account
  authLogin(email?: string, password?: string): Promise<any> {

    return new Promise((resolve, reject) =>  {
     
    });
  }

}
