import { registration } from './../../store/actions/auth.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserRegisterModel } from '../models/user-register-model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup
  user: UserRegisterModel = new UserRegisterModel();
  userBirthday!: Date;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.minLength(4), Validators.maxLength(100)]),  
      surname: new FormControl('', [Validators.minLength(4), Validators.maxLength(100)]),
      login: new FormControl('', [Validators.minLength(4), Validators.maxLength(100)]),
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.minLength(4), Validators.maxLength(100)]),
      confirmPassword: new FormControl('', [Validators.minLength(4), Validators.maxLength(100)]),
      sex: new FormControl(''),
      birthday: new FormControl('')
    })
  }

  dateChangeHandler(date: Date) {
    this.userBirthday = date;
  }

  onRegistration() {


    if (this.form.valid) {
      //TODO: set user form value

      this.store.dispatch(registration())
    }
  }

}
