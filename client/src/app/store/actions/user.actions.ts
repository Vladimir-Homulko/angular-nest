import { UserUpdateModel } from './../models/update-user.model';
import { UserCreateModel } from './../models/create-user.model';
import { UserActionTypes } from './user.actions.types';
import { createAction, props } from "@ngrx/store";
import { UserModel } from 'src/app/model/user.model';

export const getAllUsers = createAction(
      UserActionTypes.GET_ALL
);

export const getAllUsersSuccess = createAction(
      UserActionTypes.GET_ALL_SUCCESS,
      props<{ users: [], role: string }>()
);

export const getAllUsersFailed = createAction(
      UserActionTypes.GET_ALL_FAILED
);

export const createUser = createAction(
      UserActionTypes.CREATE_USER,
      props<{user: UserModel}>()
);

export const createUserSuccess = createAction(
      UserActionTypes.CREATE_USER_SUCCESS,
);

export const createUserFailed = createAction(
      UserActionTypes.CREATE_USER_FAILED
);

export const updateUser = createAction(
      UserActionTypes.UPDATE_USER,
      props<{ id: string, user: UserModel }>()
);

export const updateUserSuccess = createAction(
      UserActionTypes.UPDATE_USER_SUCCESS,
      props<{ user: UserModel }>()
);

export const updateUserFailed = createAction(
      UserActionTypes.UPDATE_USER_FAILED,
);

export const getAllUsersMale = createAction(
      UserActionTypes.FILTER_MALE
);

export const getAllUsersMaleSuccess = createAction(
      UserActionTypes.FILTER_MALE_SUCCESS,
      props<{ users: [], role: string }>()
);

export const getAllUsersFemale = createAction(
      UserActionTypes.FILTER_FEMALE
);

export const getAllUsersFemaleSuccess = createAction(
      UserActionTypes.FILTER_FEMALE_SUCCESS,
      props<{ users: [], role: string }>()
);

export const resetMessages = createAction(
      UserActionTypes.RESET_MESSAGES
)