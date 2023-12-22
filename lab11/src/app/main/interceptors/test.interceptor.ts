import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Interceptor is called.');
    const headerContent = 'EloElo320'
    const modifiedReq = request.clone({
      headers: request.headers.set('Authorized',headerContent)
    })
    console.log("modified: ", modifiedReq);
    
    return next.handle(modifiedReq);
  }
}
