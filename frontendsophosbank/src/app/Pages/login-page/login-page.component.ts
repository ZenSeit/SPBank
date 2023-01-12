import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/Models/user.interface';
import { userAuth } from 'src/app/Models/userAuth.interface';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/Token/token.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  

  constructor(

    private loginService: LoginService,

    private userService: UserService,

    private router: Router,

    private tokenService:TokenService,

    private jwtAuth:JwtHelperService

  ) {}


  ngOnInit(): void {
    this.tokenService.getToken().subscribe(tk=>{if(!this.jwtAuth.isTokenExpired(tk)) this.router.navigate(['/users'])})
  }

  logging(usAuth: userAuth) {
    console.log(usAuth);
    this.loginService.loggingBackend(usAuth).subscribe(
      (res) => {
        localStorage.setItem('token', res.headers.get('Authorization'));
        setTimeout(()=> {
          this.router.navigateByUrl('/users');
          this.tokenService.setToken(localStorage.getItem('token') || '')
      }, 500);
        
      },
      (error: HttpErrorResponse) => alert(error.status)
    );
  }

  async redirectToContent() {
    this.router.navigateByUrl('/users');
  }

  registerUser(us:User){
    this.userService.addNewUser(us).subscribe(
      (res)=>{
        console.log(res);
      },
      (error: HttpErrorResponse) => alert(error.status)
    )
  }
}
