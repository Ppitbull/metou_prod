import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  loginEvent = new BehaviorSubject<boolean>(false);
  loadedDataFromLocalStorage = new BehaviorSubject<boolean>(false);
}
