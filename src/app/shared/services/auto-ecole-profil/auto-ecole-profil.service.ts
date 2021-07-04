import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AutoEcole } from 'src/app/entities/autoecole';
import { LocalStorageService } from '../../utils/services/localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AutoEcoleProfilService {
  currentAutoEcole: BehaviorSubject<AutoEcole> = new BehaviorSubject<AutoEcole>(null);

  constructor(private localStorageService:LocalStorageService) {
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

}
