import { UserService } from 'src/services/user.service';
import { getRole, getRoleSuccess, getAllUsers, getAllUsersSuccess, getAllUsersFailed } from './../actions/user.actions';
import { tap, mergeMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/services/auth.service';


@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userServise: UserService,  
    private router: Router, 
  ) { }

  
  loadedUsers$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(getAllUsers),
        mergeMap(() => {
          return this.userServise.getAllUsers().pipe(
            map((users: any) => {
              return getAllUsersSuccess({ users });
            })
          )
        })
      )
    }
  )
  

}