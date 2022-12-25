import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.interface';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent {
  
  @Input() dataUser: User[] = [];
  @Output() idUser = new EventEmitter<number>();
  @Output() eUser= new EventEmitter<User>();

  constructor(private router: Router) {}

  displayedColumns: string[] = ['id', 'names', 'lastnames', 'email', 'buttons'];

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
