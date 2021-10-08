import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = 'http://localhost:8080/api/user';

  constructor(
    private http: HttpClient,
    private jwtService: JwtHelperService
    ) { }

  getAllUsers() {
    return this.http.get(this.BASE_URL);
  }

  getRole() {
    const token = localStorage.getItem('token');
    const tokenData = this.jwtService.decodeToken(token!); 
    return tokenData.role;
  }

  getAllUsersWhereSexMale() {
    return this.http.get(`${this.BASE_URL}/male`);
  }

  getAllUsersWhereSexFemale() {
    return this.http.get(`${this.BASE_URL}/female`);
  }

}
