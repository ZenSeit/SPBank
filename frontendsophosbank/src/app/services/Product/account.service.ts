import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  getAccountsByUser(idUser:number):Observable<any>{
    return this.http.get(environment.url+`product/user/${idUser}`)
  }

  getAccountById(idAccount:number):Observable<any>{
    return this.http.get(environment.url+`product/${idAccount}`)
  }

}
