import { Action, createReducer, on } from '@ngrx/store';
import { AuthActionTypes } from './../actions/auth.actions.types';
import { User } from "src/app/auth/models/user-model";
import { loginSuccess } from '../actions/auth.actions';

export interface State {
      
      isAuthenticated: boolean;

      user: User | null;

      errorMessage: string | null;
}

export const initialState: State = {
      isAuthenticated: false,
      user: null,
      errorMessage: null
};

const _authReducer = createReducer(
    initialState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            isAuthenticated: true,
            user: {
                email: action.user.email,
                token: action.user.token
            }
        }
    })
)

export function AuthReducer(state: State, action: Action) {
    return _authReducer(state, action);
}