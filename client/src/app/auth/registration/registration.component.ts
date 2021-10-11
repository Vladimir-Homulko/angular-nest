import { registration } from './../../store/actions/auth.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserRegisterModel } from '../models/user-register-model';
import { Store } from '@ngrx/store';
import { birthdayValidator } from 'src/app/utils/birthday-validator';

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
      name: new FormControl('', [Validators.minLength(4), Validators.maxLength(100), Validators.required]),  
      surname: new FormControl('', [Validators.minLength(4), Validators.maxLength(100), Validators.required]),
      login: new FormControl('', [Validators.minLength(4), Validators.maxLength(100), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(4), Validators.maxLength(100), Validators.required]),
      sex: new FormControl(''),
      birthday: new FormControl('', [birthdayValidator(), Validators.required])
    })
  }

  dateChangeHandler(date: Date) {
    this.userBirthday = date;
  }

  onRegistration() {
    if (this.form.valid) {
      this.store.dispatch(registration({ user: this.user }))
    }
  }

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get surname(): FormControl {
    return this.form.get('surname') as FormControl;
  }

  get login(): FormControl {
    return this.form.get('login') as FormControl;
  }
  
  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get sex(): FormControl {
    return this.form.get('sex') as FormControl;
  }

  get birthday(): FormControl {
    return this.form.get('birthday') as FormControl;
  }

}
