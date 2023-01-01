import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.interface';
import { UserService } from 'src/app/services/User/user.service';


@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((obs) => {
      this.users = obs;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUserById(id).subscribe(
      (obs) => {
        this.getUsers();
      },
      (error: HttpErrorResponse) => alert(error.error)
    );
  }

  registerNewUser(newUser:User){
    this.userService.addNewUser(newUser).subscribe(
      (obs) => {
        console.log(obs);
        this.getUsers();
      },
      (error: HttpErrorResponse) => alert(error.error)
    );
  }

  editUser(user:User){
    this.userService.editUser(user).subscribe(
      (obs) => {
        console.log(obs);
        this.getUsers();
      },
      (error: HttpErrorResponse) => alert(error.error)
    );
  }

}
