import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userAuth } from 'src/app/Models/userAuth.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  

  constructor(
    private loginService: LoginService,

    private router: Router
  ) {}

  logging(usAuth: userAuth) {
    console.log(usAuth);
    this.loginService.loggingBackend(usAuth).subscribe(
      (res) => {
        localStorage.setItem('token', res.headers.get('Authorization'));
        setTimeout(()=> {
          this.router.navigateByUrl('/users');
      }, 500);
        
      },
      (error: HttpErrorResponse) => alert(error.status)
    );
  }

  async redirectToContent() {
    this.router.navigateByUrl('/users');
  }
}
