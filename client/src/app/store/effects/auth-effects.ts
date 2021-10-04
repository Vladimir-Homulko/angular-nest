import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/services/auth.service';
import { AuthActionTypes } from '../actions/auth.actions.types';




@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  

}