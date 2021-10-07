import { UserUpdateModel } from './../models/update-user.model';
import { UserCreateModel } from './../models/create-user.model';
import { UserActionTypes } from './user.actions.types';
import { createAction, props } from "@ngrx/store";

export const getAllUsers = createAction(
      UserActionTypes.GET_ALL
);

export const getAllUsersSuccess = createAction(
      UserActionTypes.CREATE_USER_SUCCESS,
      props<{ users: [] }>()
);

export const getAllUsersFailed = createAction(
      UserActionTypes.CREATE_USER_FAILED
);

export const createUser = createAction(
      UserActionTypes.CREATE_USER,
      props<{user: UserCreateModel}>()
);

export const createUserSuccess = createAction(
      UserActionTypes.CREATE_USER_SUCCESS,
);

export const createUserFailed = createAction(
      UserActionTypes.CREATE_USER_FAILED
);

export const updateUser = createAction(
      UserActionTypes.UPDATE_USER,
      props<{ user: UserUpdateModel }>()
);

export const updateUserSuccess = createAction(
      UserActionTypes.UPDATE_USER_SUCCESS,
);

export const updateUserFailed = createAction(
      UserActionTypes.UPDATE_USER_FAILED,
);

export const getRole = createAction(
      UserActionTypes.GET_ROLE
);

export const getRoleSuccess = createAction(
      UserActionTypes.GET_ROLE_SUCCESS
)