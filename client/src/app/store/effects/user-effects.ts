import { UserService } from 'src/services/user.service';
import { getAllUsers, getAllUsersSuccess, getAllUsersMale, getAllUsersMaleSuccess, getAllUsersFemaleSuccess } from './../actions/user.actions';
import { mergeMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';


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
              const role = this.userServise.getRole()
              return getAllUsersSuccess({ users, role });
            })
          )
        }),
      )
    }
  )

  $loadUsersWhereSexMale = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(getAllUsersMale),
        mergeMap(() => {
          return this.userServise.getAllUsersWhereSexMale().pipe(
            map((users: any) => {
              return getAllUsersMaleSuccess(users)
            })
          )
        })
      )
    }
  )

  $loadUsersWhereSexFemale = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(getAllUsersMale),
        mergeMap(() => {
          return this.userServise.getAllUsersWhereSexFemale().pipe(
            map((users: any) => {
              return getAllUsersFemaleSuccess(users)
            })
          )
        })
      )
    }
  )


}