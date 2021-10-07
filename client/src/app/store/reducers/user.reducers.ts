import { Action } from '@ngrx/store';
import { getAllUsers, getAllUsersSuccess } from './../actions/user.actions';
import { createReducer, on } from '@ngrx/store';

export interface UsersState {
      
      users: [] | null;

      loading: boolean;

      errorMessage: string | null;

      successMessage: string | null;

      role: string | null;
}

export const initialUsersState: UsersState = {
    users: null,
    loading: false,
    errorMessage: null,
    successMessage: null,
    role: null
}

const _userReducer = createReducer(
    initialUsersState,
    on(getAllUsersSuccess, (state, action) => {
        return {
            ...state,
            users: action.users
        }
    })
);

export function UsersReducer(state: UsersState, action: Action) {
    return _userReducer(state, action);
}