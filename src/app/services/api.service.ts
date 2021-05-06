import { Injectable } from '@angular/core';
import { Request } from '../utils/request';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient
  ) { }

  get(request:Request)
  {
    this.http.get(request.serializeDataToUrl(),{'headers':request.headerData})
  }

  put(request:Request)
  {

  }

  post(request:Request)
  {

  }

}
