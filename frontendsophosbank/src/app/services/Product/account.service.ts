import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/product.interface';
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

  createAccount(account:any):Observable<any>{
    return this.http.post(environment.url+`product`,account)
  }

  editAccount(account:any):Observable<any>{
    return this.http.post(environment.url+`product/${account.id}`,account,{responseType: 'text'})
  }

}
