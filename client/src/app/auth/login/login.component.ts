import { login } from './../../store/actions/auth.actions';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from '../models/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  user: User = new User(); 

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(100)])
    });
  }

  onLogin() {
    if (this.form.valid) {
      this.store.dispatch(login(this.form.value))
    }
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  
  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

}
