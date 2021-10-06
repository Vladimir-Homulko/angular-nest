import { Action, createReducer, on } from '@ngrx/store';
import { AuthActionTypes } from './../actions/auth.actions.types';
import { User } from "src/app/auth/models/user-model";
import { loginSuccess, registrationFailed, registrationSuccess } from '../actions/auth.actions';

export interface State {
      
      isAuthenticated: boolean;

      token: Object | null;

      errorMessage: string | null;

      successMessage: string | null; 
}

export const initialState: State = {
      isAuthenticated: false,
      token: null,
      errorMessage: null,
      successMessage: null
};

const _authReducer = createReducer(
    initialState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            isAuthenticated: true,
            token: action.token
        }
    }),
    on(registrationSuccess, (state, action) => {
        return {
            ...state,
            successMessage: 'Registration success, please sing in!'
        }
    }),
    on(registrationFailed, (state, action) => {
        return {
            ...state,
            errorMessage: 'Registration failed'
        }
    })
) 

export function AuthReducer(state: State, action: Action) {
    return _authReducer(state, action);
}