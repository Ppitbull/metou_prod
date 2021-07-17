import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AutoEcole } from 'src/app/entities/autoecole';
import { EntityID } from 'src/app/entities/entityid';
import { ActionStatus } from '../../utils/services/firebase';
import { LocalStorageService } from '../../utils/services/localstorage/localstorage.service';
import { AutoecoleService } from '../autoecole/autoecole.service';

@Injectable({
  providedIn: 'root'
})
export class AutoEcoleProfilService {
  currentAutoEcole: BehaviorSubject<AutoEcole> = new BehaviorSubject<AutoEcole>(null);

  constructor(private localStorageService:LocalStorageService,
    private autoEcoleService:AutoecoleService) {
    this.localStorageService.getSubjectByKey("auto_ecole_profil").subscribe((autoEcoleObj:any)=>{
      if(!autoEcoleObj) return;
      let autoEcole:AutoEcole=new AutoEcole();
      autoEcole.hydrate(autoEcole);
      this.currentAutoEcole.next(autoEcole);
    })
  }
  setAutoEcole(autoEcole:AutoEcole):void
  {
    this.localStorageService.setData("auto_ecole_profil",autoEcole.toString());
  }
  getCurrentAutoEcole(autoEcoleID:EntityID):Promise<ActionStatus>
  {
    return new Promise<ActionStatus>((resolve,reject)=>{
      this.autoEcoleService.getAutoEcoleById(autoEcoleID)
      .then((result:ActionStatus)=>{
        this.setAutoEcole(result.result);
        result.result=null;
        resolve(result);
      })
      .catch((error:ActionStatus)=>reject(error))
    })
  }

}
