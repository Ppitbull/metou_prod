import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/entities/accounts';
import { EntityID } from 'src/app/entities/entityid';
import { ActionStatus } from 'src/app/utils/services/firebase';
import { FirebaseApi } from 'src/app/utils/services/firebase/FirebaseApi';
// import { AuthService } from '../auth/auth.service';


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
    if (!this.listUser.has(user.id.toString())) { this.listUser.set(user.id.toString(), user) }
  }

  // recuperer les informations d'un utilisateur
  getUserById(id: EntityID): Promise<ActionStatus> {
    console.log("id ",id)
    return new Promise<any>((resolve, reject) => {
      if (this.listUser.has(id.toString())) {
        let result: ActionStatus = new ActionStatus();
        result.result = this.listUser.get(id.toString());
        return resolve(result);
      }
      this.firebaseApi.fetchOnce(`users/${id.toString()}`)
        .then((result: ActionStatus) => {
          let user: User = new User();
          console.log("result, ",result)
          user.hydrate(result.result);
          this.listUser.set(user.id.toString(), user);
          this.usersSubject.next(this.listUser);
          result.result = user;

          resolve(result);
        })
        .catch((error) => {
          this.firebaseApi.handleApiError(error);
          reject(error);
        });
    });
  }

  
  addUser(user: User): Promise<ActionStatus> {
    return new Promise<ActionStatus>((resolve, reject) => {
      if (this.listUser.has(user.id.toString())) { return resolve(new ActionStatus()); }
      // console.log("User ",user.toString())
      this.firebaseApi.set(`users/${user.id.toString()}`, user.toString())
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
