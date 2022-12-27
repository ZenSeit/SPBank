import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) { }

  getAllStatementsByAccount(id:number):Observable<any>{
    return this.http.get(environment.url+`statement?idAccount=${id}`)
  }

  creditToAccount(infoTransaction:any):Observable<any>{

    let body={
      transactionValue:infoTransaction?.transactionValue
    }

    return this.http.post(environment.url+`statement/${infoTransaction?.idAccount}/credit`,body,{responseType: 'text'})
  }

  debitFromAccount(infoTransaction:any):Observable<any>{

    let body={
      transactionValue:infoTransaction?.transactionValue
    }

    return this.http.post(environment.url+`statement/${infoTransaction?.idAccount}/debit`,body,{responseType: 'text'})
  }

  transferToAccount(infoTransaction:any):Observable<any>{

    let body={
      transactionValue:infoTransaction?.transactionValue
    }

    return this.http.post(environment.url+`statement/${infoTransaction?.idAccount}/transfer?toAccount=${infoTransaction?.toAccount}`,body,{responseType: 'text'})
  }

}
