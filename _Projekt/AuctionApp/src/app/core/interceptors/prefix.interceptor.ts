import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PrefixInterceptor implements HttpInterceptor {

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const uri: string = "http://localhost:3000/";

    const modifiedRequest: HttpRequest<unknown> = request.clone({
      url: `${uri}${request.url}`,
    });

    return next.handle(modifiedRequest);
  }
}
