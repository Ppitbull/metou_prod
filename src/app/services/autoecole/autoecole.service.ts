import { Injectable } from '@angular/core';
import { AutoEcole } from '../../entities/autoecole';
import { AutoEcoleAdmin } from '../../entities/accounts';
import { ApiService } from '../../utils/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AutoecoleService {

  constructor(private apiService:ApiService) { }
  newAutoEcole(autoecole:AutoEcole,admin:AutoEcoleAdmin)
  {

  }
}
