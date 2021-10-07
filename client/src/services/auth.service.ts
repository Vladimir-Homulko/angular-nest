import { tap } from 'rxjs/operators';
import { User } from 'src/app/auth/models/user-model';
import { UserRegisterModel } from '../app/auth/models/user-register-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private jwtService: JwtHelperService) { }

  getToken() {
    return localStorage.getItem('token');
  }

  singIn(email: string, password: string) {
    const url = `${this.BASE_URL}/auth`;
    return this.http.post(url, { email, password }).pipe(
      map((token: any) => {
        localStorage.setItem('token', token.access_token);
        return { 
          ...token,
          ...this.jwtService.decodeToken(token.access_token)
        }
      })
    )
  }

  singUp(user: UserRegisterModel) {
    const url = `${this.BASE_URL}/registration`
    return this.http.post(url, { ...user, role: 'user'});
  }
  
  setTokenInLocalStorage(token: string) {
    console.log(token);
    
    localStorage.setItem('token', token);
  }
}
