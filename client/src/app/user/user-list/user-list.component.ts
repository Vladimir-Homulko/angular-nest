import { Router } from '@angular/router';
import { login } from './../../store/actions/auth.actions';
import { AppState } from './../../store/app.states';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthSelectors } from 'src/app/store/selectors/auth.selectors';
import { getAllUsers } from 'src/app/store/actions/user.actions';
import { UserSelectors } from 'src/app/store/selectors/user.selectors';

export interface IUser {
  id: number;
  name: string;
  surname: string;
  login: string;
  email: string;
  birthday: Date;
  sex: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // role?: any
  users?: IUser[] | null;
  displayedColumns: string[] = ['ID', 'NAME', 'SURNAME', 'LOGIN', 'EMAIL', 'SEX', 'BIRTHDAY'];

  constructor(
    private store$: Store<AppState>,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.store$.dispatch(getAllUsers());
    this.store$.select(UserSelectors.getUsersSelect).subscribe(users => this.users = users);
    
    // this.store$.select(AuthSelectors.selectRole).subscribe(role => this.role = role);
  }

  getUsers() {
    
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
