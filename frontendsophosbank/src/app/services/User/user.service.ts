import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/user.interface';
import { environment } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<any>{
    return this.http.get(environment.url+'user')
  }

  deleteUserById(id:number):Observable<any>{
    return this.http.delete(environment.url+`user/${id}`,{responseType: 'text'})
  }

  getUserById(id:number):Observable<any>{
    return this.http.get(environment.url+`user/${id}`)
  }

  addNewUser(user:any):Observable<any>{
    return this.http.post(environment.url+`user`,user,{responseType: 'text'})
  }

  editUser(user:User):Observable<any>{
    return this.http.post(environment.url+`user/${user.id}`,user,{responseType: 'text'})
  }


}
