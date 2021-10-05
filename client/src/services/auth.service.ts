import { User } from 'src/app/auth/models/user-model';
import { localStorageSync } from 'ngrx-store-localstorage';
import { UserRegisterModel } from '../app/auth/models/user-register-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  singIn(email: string, password: string) {
    const url = `${this.BASE_URL}/auth`;
    return this.http.post(url, {email, password});
  }

  singUp(user: UserRegisterModel) {
    const url = `${this.BASE_URL}/registration`
    return this.http.post(url, user);
  }
  
  setUserInLocalStorage(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
