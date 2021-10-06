import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) { }

  getLogginedUser() {
    
  }

}
