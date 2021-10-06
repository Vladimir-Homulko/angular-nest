import { UserService } from './../../../../../backend/src/user/user.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { AuthService } from 'src/services/auth.service';


@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userServise: UserService,  
    private router: Router, 
  ) { }

  
}