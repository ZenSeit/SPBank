import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { msg_Es } from '../Information/constantsToApp';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { TokenService } from '../services/Token/token.service';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {
  constructor(
    private jwtAuth: JwtHelperService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (true) {
      const modReq = req.clone({
        setHeaders: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      });
      return next.handle(modReq).pipe(
        catchError((error: HttpErrorResponse) => {
          switch (error.status) {
            case 401:
              if (localStorage.getItem('token')) {
                if (
                  this.jwtAuth.isTokenExpired(localStorage.getItem('token'))
                ) {
                  this.router.navigate(['/login']);
                }
              } else {
                alert('Credenciales invalidas');
              }
              break;
            case 400:
              msg_Es(error.error);
              break;
            case 404:
              msg_Es(error.error);
              break;
            default:
              alert('En el momento no podemos procesar la solicitud');
          }
          return throwError(error.error);
        })
      );
    }
  }
}
