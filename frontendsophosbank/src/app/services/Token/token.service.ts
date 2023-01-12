import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenStorage: BehaviorSubject<string>;

  constructor() {
    this.tokenStorage = new BehaviorSubject('')
   }

   setToken(token:string){
    this.tokenStorage.next(token);
   }

   getToken():Observable<string>{
    return this.tokenStorage.asObservable();
   }

   closeSession(){
    localStorage.removeItem('token');
   }


}
