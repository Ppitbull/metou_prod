import { Injectable } from '@angular/core';
import { AutoEcole } from '../entities/autoecole';
import { AutoEcoleAdmin } from '../entities/account';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AutoecoleService {

  constructor(private apiService:ApiService) { }
  newAutoEcole(autoecole:AutoEcole,admin:AutoEcoleAdmin)
  {

  }
}
