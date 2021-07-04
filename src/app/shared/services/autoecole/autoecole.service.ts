import { Injectable } from '@angular/core';
import { AutoEcole } from 'src/app/entities/autoecole';
import { ActionStatus } from '../../utils/services/firebase';
import { FirebaseApi } from '../../utils/services/firebase/FirebaseApi';

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
