import { Action, createReducer, on } from '@ngrx/store';
import { loginSuccess, registrationFailed, registrationSuccess } from '../actions/auth.actions';

export interface AuthData {
    token: string,
    role: string,
    iat: number,
    exp: number
}

export interface AuthState {
      
      isAuthenticated: boolean;

      authData: AuthData | null;

      errorMessage: string | null;

      successMessage: string | null; 
}

export const initialState: AuthState = {
      isAuthenticated: false,
      authData: null,
      errorMessage: null,
      successMessage: null
};

const _authReducer = createReducer(
    initialState,
    on(loginSuccess, (state, {authData}) => {
        return {
            ...state,
            isAuthenticated: true,
            authData
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
            errorMessage: 'Registration failed!'
        }
    })
) 

export function AuthReducer(state: AuthState, action: Action) {
    return _authReducer(state, action);
}