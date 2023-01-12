import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/Models/user.interface';
import { TokenService } from 'src/app/services/Token/token.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  
  @Input() dataUser: User[] = [];
  @Output() idUser = new EventEmitter<number>();
  @Output() eUser= new EventEmitter<User>();

  idUserSession:number=0

  constructor(private router: Router, private tokenService:TokenService,private authJwt:JwtHelperService) {}

  ngOnInit(): void {
    this.tokenService.getToken().subscribe(tk=>this.idUserSession=this.authJwt.decodeToken(tk).id)
  }

  displayedColumns: string[] = ['id', 'names', 'lastnames', 'email','cellphone', 'buttons'];

  goToUserAccounts(id: number): void {
    this.router.navigate([`user/${id}`]);
  }

  deleteUser(id: number): void {
    this.idUser.emit(id)
  }

  editUser(eUser:User){
    this.eUser.emit(eUser);
  }

}
