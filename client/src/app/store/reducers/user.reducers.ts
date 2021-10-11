import { Action } from '@ngrx/store';
import { getAllUsersSuccess, getAllUsersMaleSuccess, getAllUsersFemaleSuccess, updateUserSuccess, createUserSuccess, updateUserFailed, createUserFailed, resetMessages } from './../actions/user.actions';
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
            users: action.users,
            role: action.role
        }
    }),
    on(getAllUsersMaleSuccess, (state, action) => {
        return {
            ...state,
            users: action.users,
            role: action.role
        }
    }),
    on(getAllUsersFemaleSuccess, (state, action) => {
        return {
            ...state,
            users: action.users,
            role: action.role
        }
    }),
    on(updateUserSuccess, (state, action) => {
        return {
            ...state,
            user: action.user,
            successMessage: 'Update success!'
        }
    }),
    on(updateUserFailed, (state, action) => {
        return {
            ...state,
            errorMessage: 'Update failed!'
        }
    }),
    on(createUserSuccess, (state, action) => {
        return {
            ...state,
            successMessage: 'Create success!'
        }
    }),
    on(createUserFailed, (state, action) => {
        return {
            ...state,
            errorMessage: 'Create failed!'
        }
    }),
    on(resetMessages, (state, action) => {
        return {
            ...state,
            errorMessage: null,
            successMessage: null
        }
    })
);

export function UsersReducer(state: UsersState, action: Action) {
    return _userReducer(state, action);
}