/**
 *  Interceptor with new Http Client in Angular 4.3
 *  Refresh token after
 */

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { AuthorizationService } from 'app/services/authorization.service';
import { Router } from '@angular/router';


@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  AccessToken = '';

  constructor(public authService: AuthorizationService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // redirect to the login route
          // or show a modal
        }
      }
    }).catch((err) => {
      // Clone the auth header. Set token
      const authHeaders = new HttpHeaders().set('Authorization', this.AccessToken).set('Content-Type', 'application/json');
      // Clone the request to add the new header.
      const newRequest = request.clone({ headers: authHeaders });
      if (err.status === 401) {
        // if response is unauthorized check RefreshToken (if you checked option 'Keep logged in' on website)
        if (localStorage.getItem('RefreshToken')) {
          // if RefreshToken exists renew AccessToken
          this.authService.refreshToken().subscribe(
            data => {
              // set new AccessToken from API
              this.AccessToken = data.accessToken;
              console.log(`Request for ${request.urlWithParams}`, request);
            },
            error => {
              // not logged in so redirect to login page with the return url
              console.error(error);
              this.router.navigate(['/login']);
            });
          // Pass on the cloned request instead of the original request.
          return next.handle(newRequest);
        } else {
          // if Refresh Token doesn't exists (if you NOT checked option 'Keep logged in' on website)
          this.router.navigate(['/login']);
        }
      }
      return Observable.throw(err);      
    });
  }
}
