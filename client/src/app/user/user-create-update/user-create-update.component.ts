import { createUser, updateUser } from './../../store/actions/user.actions';
import { AppState } from './../../store/app.states';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { birthdayValidator } from 'src/app/utils/birthday-validator';
import { UserModel } from 'src/app/model/user.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-create-update',
  templateUrl: './user-create-update.component.html',
  styleUrls: ['./user-create-update.component.css']
})
export class UserCreateUpdateComponent implements OnInit {

  constructor(
    private readonly userService: UserService,
    private readonly activateRoute: ActivatedRoute,
    private readonly router: Router,
    private store$: Store<AppState>
  ) { }

  form!: FormGroup
  user: UserModel = new UserModel();
  userBirthday!: Date;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.minLength(4), Validators.maxLength(100), Validators.required]),  
      surname: new FormControl('', [Validators.minLength(4), Validators.maxLength(100), Validators.required]),
      login: new FormControl('', [Validators.minLength(4), Validators.maxLength(100), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(
        '',
          this.isCreatePage() ? 
          [Validators.minLength(4), Validators.maxLength(100), Validators.required] : 
          []
         ),
      sex: new FormControl(''),
      birthday: new FormControl('', [birthdayValidator(), Validators.required])
    })

    if (!this.isCreatePage()) {
      this.activateRoute.data.subscribe((response: any) => {
        this.user = response.user;
      });
    }

  }

  onCreate() {
    this.store$.dispatch(createUser({ user: this.user }))
  }

  onUpdate() {
    this.store$.dispatch(updateUser({ id:this.user.id, user:this.user }))
  }

  dateChangeHandler(date: Date) {
    this.userBirthday = date;
  }

  isCreatePage() {
    return this.router.url === '/users/create';
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

  get confirmPassword(): FormControl {
    return this.form.get('confirmPassword') as FormControl;
  }

  get sex(): FormControl {
    return this.form.get('sex') as FormControl;
  }

  get birthday(): FormControl {
    return this.form.get('birthday') as FormControl;
  }
}
