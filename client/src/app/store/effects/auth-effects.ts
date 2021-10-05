import { tap } from 'rxjs/operators';
import { loginSuccess, loginFailture, registration, registrationSuccess, registrationFailed } from './../actions/auth.actions';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/services/auth.service';
import { login } from '../actions/auth.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) { }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap(action => {
        return this.authService.singIn(action.email, action.password).pipe(
          map(user => { 
            return loginSuccess({ user })
          }),
          catchError(error => of(loginFailture({ error })))
        )
      })
    )
  );

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccess),
        tap(action => {
          this.authService.setUserInLocalStorage(action.user);
          this.router.navigate(['/users']);
        })
      )
    },
    { dispatch: false }
  );

  registration$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(registration),
        exhaustMap(action => {
          return this.authService.singUp(action.user).pipe(
            map(user => registrationSuccess()),
            catchError(error => of(registrationFailed({ error })))
          )
        })
      )
    }
  )

  registrationRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(registrationSuccess),
        tap(action => {
          this.router.navigate(['/login']);
        })
      )
    },
    { dispatch: false }
  );
}