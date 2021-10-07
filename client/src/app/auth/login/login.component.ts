import { AuthSelectors } from './../../store/selectors/auth.selectors';
import { map, Observable } from 'rxjs';
import { login, registrationSuccess } from './../../store/actions/auth.actions';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from '../models/user-model';
import { AuthState } from 'src/app/store/reducers/auth.reducers';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  user: User = new User(); 
  successMessage$?: any;
  errorMessage$!: any;

  constructor(
    private store$: Store<AuthState>,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(100)])
    });

    this.store$.select(AuthSelectors.selectSuccessMessage).subscribe(message => this.successMessage$ = message);
    this.store$.select(AuthSelectors.selectErrorMessage).subscribe(message => this.errorMessage$ = message);

    if (this.successMessage$) {
      this.snackBar.open(this.successMessage$, 'close');
    }

    if (this.errorMessage$) {
      this.snackBar.open(this.errorMessage$, 'close');
    }
  }

  onLogin() {
    if (this.form.valid) {
      this.store$.dispatch(login(this.form.value))
    }
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  
  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

}
