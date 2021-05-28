import { Injectable } from '@angular/core';
import { ActionStatus } from 'src/app/utils/services/firebase';
import { FirebaseApi } from 'src/app/utils/services/firebase/FirebaseApi';
import { AutoEcole } from '../../entities/autoecole';

@Injectable({
  providedIn: 'root'
})
export class AutoecoleService {

  constructor(private firebaseApi:FirebaseApi) { }
  saveAutoEcole(autoecole:AutoEcole):Promise<ActionStatus>
  {
    return new Promise<ActionStatus>((resolve,reject)=>{
      this.firebaseApi.set(`autoecole/${autoecole.id.toString()}`,autoecole.toString())
      .then((result:ActionStatus)=>resolve(result))
      .catch((error)=>{
        this.firebaseApi.handleApiError(error);
        reject(error)
      })
    })
  }
}
