import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userAuth } from '../Models/userAuth.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlLogin='http://localhost:8080/login'

  constructor(private http:HttpClient) { }


  loggingBackend(usAuth:userAuth):Observable<any>{
    return this.http.post(this.urlLogin,usAuth,{ observe: 'response' })
  }


}
