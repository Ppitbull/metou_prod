import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AutoEcoleEtudiant } from 'src/app/entities/accounts';
import { EntityID } from 'src/app/entities/entityid';
import { AccountType } from '../../utils/enum';
import { ActionStatus } from '../../utils/services/firebase';
import { LocalStorageService } from '../../utils/services/localstorage/localstorage.service';
import { AutoEcoleProfilService } from '../auto-ecole-profil/auto-ecole-profil.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  etudiants:Map<String,EntityID[]>=new Map<String,EntityID[]>()
  constructor(
    private userService:UserService,
    private autoEcoleProfil:AutoEcoleProfilService,
    private localStorageService:LocalStorageService)
  {
    this.localStorageService.getSubjectByKey("etudiant_list")
    .subscribe((data)=>{
      if(!data) return;
      for(let keySession in data)
      {
        this.etudiants.set(keySession,data[keySession].map((key)=>{
          let id:EntityID=new EntityID();
          id.setId(key);
          return id
        }));
      }
    })
  }

  setData(map:Map<String,EntityID[]>)
  {
    let data={}
    Array.from(map.keys()).forEach((key)=>data[key.toString()]=map.get(key.toString()).map((id:EntityID)=>id.toString()))
    this.localStorageService.setData("etudiant_list",data);
  }

  loadEtudiantsData()
  {
    this.userService.findUsersByKey("accountType",AccountType.AUTOECOLE_ETUDIANT,this.autoEcoleProfil.currentAutoEcole.getValue().id)
    .then((result:ActionStatus)=>{
      let etudiants:AutoEcoleEtudiant[]=result.result;
      let etudiantsMap:Map<String,EntityID[]>=new Map();
      etudiants.forEach((etudiant:AutoEcoleEtudiant)=>{
        if(etudiantsMap.has(etudiant.inscriptionSessionID.toString())) etudiantsMap.get(etudiant.inscriptionSessionID.toString()).push(etudiant.id);
        else etudiantsMap.set(etudiant.inscriptionSessionID.toString(),[etudiant.id]);
      });
      this.setData(etudiantsMap);
    })
  }

  getNombreEtudiantInscrits() //:Promise<ActionStatus>
  {
    // return Array.from(this.etudiants.getValue().values())
    // .filter((etudiant:AutoEcoleEtudiant)=>etudiant.inscrit).length
  }
}
