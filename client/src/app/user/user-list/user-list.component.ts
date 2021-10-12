import { MatSnackBar } from '@angular/material/snack-bar';
import { getAllUsersMale, getAllUsersFemale, resetMessages } from './../../store/actions/user.actions';
import { Router } from '@angular/router';
import { login } from './../../store/actions/auth.actions';
import { AppState } from './../../store/app.states';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {

  role?: any
  users?: IUser[] | null;
  dataSource?: IUser[];
  displayedColumns: string[] = ['ID', 'NAME', 'SURNAME', 'LOGIN', 'EMAIL', 'SEX', 'BIRTHDAY'];
  errorMessage$?: string | null;
  successMessage$?: string | null;

  lastLoadedUserCount: number = 0;

  constructor(
    private store$: Store<AppState>,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.store$.dispatch(getAllUsers());
    this.store$.select(UserSelectors.getUsersSelect).subscribe(users => this.users = users?.slice(0, 15));
    this.lastLoadedUserCount = this.lastLoadedUserCount + 15;
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

  onScroll(e: any) {
    if (e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight) {
      this.store$.select(UserSelectors.getUsersSelect)
        .subscribe(users => this.users = users?.slice(0, this.lastLoadedUserCount));
      this.lastLoadedUserCount = this.lastLoadedUserCount + 15;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
