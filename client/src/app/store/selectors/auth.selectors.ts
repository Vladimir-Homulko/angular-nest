import { AppState } from './../app.states';
import { AuthState } from './../reducers/auth.reducers';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export namespace AuthSelectors {
    
    export const authStateSelect = createFeatureSelector<AuthState>('auth');

    export const selectSuccessMessage = createSelector(
        authStateSelect,
        (state: AuthState) => state.successMessage
    );

    export const selectErrorMessage = createSelector(
        authStateSelect,
        (state: AuthState) => state.errorMessage
    )

    export const selectRole = createSelector(
        authStateSelect,
        (state: AuthState) => state.authData?.role
    );
}