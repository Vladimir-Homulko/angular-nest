import { UserRegisterModel } from './../../auth/models/user-register-model';
import { User } from 'src/app/auth/models/user-model';
import { AuthActionTypes } from './auth.actions.types';
import { createAction, props, Action } from "@ngrx/store";

export const login = createAction(
      AuthActionTypes.LOGIN,
      props<{ email: string, password: string }>()
);

export const loginSuccess = createAction(
      AuthActionTypes.LOGIN_SUCCESS,
      props<{ token: Object }>()
)

export const loginFailture = createAction(
      AuthActionTypes.LOGIN_FAILED,
      props<{ error: string }>()
)

export const registration = createAction(
      AuthActionTypes.REGISTRATION,
      props<{ user: UserRegisterModel }>()
)

export const registrationSuccess = createAction(
      AuthActionTypes.REGISTRATION_SUCCES,
)

export const registrationFailed = createAction(
      AuthActionTypes.REGISTRATION_FAILED,
      props<{ error: string }>()
)