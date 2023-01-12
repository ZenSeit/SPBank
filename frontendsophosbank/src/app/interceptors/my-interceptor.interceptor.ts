import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {

  

    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (true) {
            const modReq = req.clone({
                setHeaders: {
                    'Authorization': `${localStorage.getItem('token')}`
                }
            });
            return next.handle(modReq);
        }
    }
}
