import { Injectable } from '@angular/core';
import { createApi } from 'unsplash-js';
import { Request } from '../../entities/request';
import { ApiService } from '../api/api.service';
import { ActionStatus } from '../firebase';
import * as unsplashConfig from "./../../config/unplash"

@Injectable({
  providedIn: 'root'
})
export class UnplashService {

  constructor(private api:ApiService) { }
  getNewImage():Promise<ActionStatus>
  {
    return new Promise<ActionStatus>((resolve,reject)=>
    {
      let r:ActionStatus=new ActionStatus();
      let request:Request=new Request();
      request.header("Authorization",`Client-ID ${unsplashConfig.unplash_access.access_key}`)
      .url("https://api.unsplash.com/photos/");

      this.api.get(request)
      .then((result)=>{
        r.result=result.results[0].urls.raw;
        resolve(r);
      })
      .catch((error)=>{
        r.result=error;
        r.apiCode=ActionStatus.UNKNOW_ERROR;
        reject(error)
      })
    })
  }
}
