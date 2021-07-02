import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EventService } from 'src/app/events/event.service';

@Injectable({
  providedIn:"root"
})
export class LocalStorageService {
  data:Map<String,BehaviorSubject<any> >=new Map<String,BehaviorSubject<any> >();

  constructor(private router:Router,
    private eventService:EventService) {
    this.getUserDataWhenNavStart();
   }

  getUserDataWhenNavStart()
  {
    this.router.events.subscribe((evt)=> {     
      if(evt instanceof NavigationEnd)
      {
        if(localStorage.getItem("data"))
        {
          let dataObj:Boolean=JSON.parse(localStorage.getItem("data"));
          if(dataObj)
          {
            for(let key in dataObj)
            {
              if(this.data.has(key)) this.data.get(key).next(dataObj[key]);
              else this.data.set(key,new BehaviorSubject<any>(dataObj[key]))
            }
          }
        }
        // this.eventService.loadedDataFromLocalStorage.next(true);
      }
    })
  }
  setData(key:String,data:any)
  {
    this.getSubjectByKey(key).next(data);
    this.saveData();
  }

  getSubjectByKey(key:String):BehaviorSubject<any>
  {
    if(this.data.has(key)) return this.data.get(key);    
    this.data.set(key,new BehaviorSubject<any>(null));
    return this.data.get(key);
  }

  saveData()
  {
    let dataObj={};
    this.data.forEach((value:BehaviorSubject<any>,key:String)=>{
      dataObj[key.toString()]=value.getValue();
    });
    localStorage.setItem("data",JSON.stringify(dataObj));
  }
  clearData()
  {
    localStorage.clear();
    this.data.clear();
  }
}
