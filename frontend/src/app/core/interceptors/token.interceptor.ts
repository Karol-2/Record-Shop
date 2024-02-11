import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token: string | null = localStorage.getItem('accessToken');
    if(token){
      const modifiedRequest: HttpRequest<unknown> = request.clone({
        setHeaders: {
          Authorization: "Bearer: " + token,
        }
      });
      
      return next.handle(modifiedRequest);
    }

    return next.handle(request);
  }
}
