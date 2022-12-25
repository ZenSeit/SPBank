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

}
