import { UserModel } from 'src/app/model/user.model';
import { UserService } from 'src/services/user.service';
import { getAllUsers, getAllUsersSuccess, getAllUsersMale, getAllUsersMaleSuccess, getAllUsersFemaleSuccess, updateUser, updateUserSuccess, createUser, createUserSuccess, getAllUsersFemale } from './../actions/user.actions';
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
              const role = this.userServise.getRole();
              return getAllUsersMaleSuccess({ users, role })
            })
          )
        })
      )
    }
  )

  $loadUsersWhereSexFemale = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(getAllUsersFemale),
        mergeMap(() => {
          return this.userServise.getAllUsersWhereSexFemale().pipe(
            map((users: any) => {
              const role = this.userServise.getRole()
              return getAllUsersFemaleSuccess({ users, role })
            })
          )
        })
      )
    }
  )

  $updateUser = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(updateUser),
        mergeMap((action) => {
          return this.userServise.updateUser(action.id, action.user).pipe(
            map((user: any) => {
              this.router.navigate(['/users']);
              return updateUserSuccess(user)
            })
          )
        })
      )
    }
  )

  $createUser = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(createUser),
        mergeMap((action) => {
          return this.userServise.createUser(action.user).pipe(
            map((user: any) => {
              this.router.navigate(['/users'])
              return createUserSuccess()
            })
          )
        })
      )
    }
  )

}