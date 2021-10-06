import { AuthService } from 'src/services/auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("interceptor");
        
        const authToken = this.authService.getToken();

        if (!authToken) {
            return next.handle(req);
        }

        const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${authToken}`)
        })

        return next.handle(authReq);
    }

}