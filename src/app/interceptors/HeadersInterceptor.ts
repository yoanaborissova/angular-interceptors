import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Constants} from '../service/Constants';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(request);
    // console.log(next);
    // alert('Request just happened');

    // request = request.clone({
    //   setHeaders: {
    //     'x-api-key': Constants.API_KEY
    //   }
    // });

    return next.handle(request);
  }
}
