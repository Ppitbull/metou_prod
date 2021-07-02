import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/entities/accounts';
import { AccountBuilder } from 'src/app/utils/functions/account.builder';
import { LocalStorageService } from 'src/app/utils/services/localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfilService {
  currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private localStorageService:LocalStorageService) {
    
    this.localStorageService.getSubjectByKey("user_profil").subscribe((userObj:any)=>{
      if(userObj)this.currentUser.next(AccountBuilder(userObj))
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
  
    resetDataUser(user)
    {
      // this.localStorageService.setUserData({
      //   isLoggedIn:this.isLoggedIn,
      //   user
      // })
    }
}
