import { Action } from '@ngrx/store';
import { getAllUsers } from './../actions/user.actions';
import { createReducer, on } from '@ngrx/store';

export interface UsersState {
      
      users: [] | null;

      errorMessage: string | null;

      successMessage: string | null;
}

export const initialUsersState: UsersState = {
    users: null,
    errorMessage: null,
    successMessage: null,
}

const _userReducer = createReducer(
    initialUsersState,
    on(getAllUsers, (state, action) =>{
        return {
            ...state,
            // TODO: spread users array
        }
    })
);

export function UsersReducer(state: UsersState, action: Action) {
    return _userReducer(state, action);
}