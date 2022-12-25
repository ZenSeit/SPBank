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

  users: User[] = [{id:1,idType:"CC",idNumber:"6666",names:"Felipe",lastNames:"Toledo",birthDate:new Date("1990-10-27"),email:"felip@correo.com",rol:"admin",modifiedAt:new Date("2022-12-14T15:36:34.875765")}];

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
