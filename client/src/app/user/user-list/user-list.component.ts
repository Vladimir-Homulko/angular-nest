import { MatSnackBar } from '@angular/material/snack-bar';
import { getAllUsersMale, getAllUsersFemale, resetMessages } from './../../store/actions/user.actions';
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

  role?: any
  users?: IUser[] | null;
  dataSource? = this.users;
  displayedColumns: string[] = ['ID', 'NAME', 'SURNAME', 'LOGIN', 'EMAIL', 'SEX', 'BIRTHDAY'];
  errorMessage$?: string | null;
  successMessage$?: string | null;

  constructor(
    private store$: Store<AppState>,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.store$.dispatch(getAllUsers());
    this.store$.select(UserSelectors.getUsersSelect).subscribe(users => this.users = users);
    this.store$.select(UserSelectors.getRoleSelect).subscribe(role => this.role = role);
    this.store$.select(UserSelectors.getSuccessMessage).subscribe(message => this.successMessage$ = message);
    this.store$.select(UserSelectors.getErrorMessage).subscribe(message => this.errorMessage$ = message);

    if (this.successMessage$) {
      this.snackBar.open(this.successMessage$, 'close');
      this.store$.dispatch(resetMessages());
    }

    if (this.errorMessage$) {
      this.snackBar.open(this.errorMessage$, 'close');
      this.store$.dispatch(resetMessages());
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    switch (filterValue) {
      case 'male':
        this.store$.dispatch(getAllUsersMale());
        this.store$.select(UserSelectors.getUsersSelect).subscribe(users => this.users = users);
        break;
      case 'female':
        this.store$.dispatch(getAllUsersFemale());
        this.store$.select(UserSelectors.getUsersSelect).subscribe(users => this.users = users);
        break;
      default:
        this.store$.dispatch(getAllUsers());
        this.store$.select(UserSelectors.getUsersSelect).subscribe(users => this.users = users);
        break;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  onTableScroll(e: any) {
    const tableViewHeight = e.target.offsetHeight 
    const tableScrollHeight = e.target.scrollHeight 
    const scrollLocation = e.target.scrollTop; 
    
    
    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;    
    if (scrollLocation > limit) {
      this.store$.dispatch(getAllUsers());
    }
  }

}
