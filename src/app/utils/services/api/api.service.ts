import { Injectable } from '@angular/core';
import { Request } from '../../entities/request';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient
  ) { }

  get(request:Request):Promise<any>
  {
    return new Promise<any>((resolve,reject)=>{
      this.http.get(request.serializeDataToUrl(),{'headers':request.headerData})
      .subscribe((result)=>{
        resolve(result);
      },(error)=>reject(error))
    })
  }

  put(request:Request)
  {

  }

  post(request:Request)
  {

  }

}
