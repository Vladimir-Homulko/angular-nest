import { createSelector } from '@ngrx/store';
import { UsersState } from './../reducers/user.reducers';
import { createFeatureSelector } from '@ngrx/store';


export namespace UserSelectors {
    
    export const userStateSelect = createFeatureSelector<UsersState>('user');
    
    export const getUsersSelect = createSelector(
        userStateSelect,
        (state: UsersState) => state.users
    )

    export const getRoleSelect = createSelector(
        userStateSelect,
        (state: UsersState) => state.role
    )

    export const getSuccessMessage = createSelector(
        userStateSelect,
        (state: UsersState) => state.successMessage
    )

    export const getErrorMessage = createSelector(
        userStateSelect,
        (state: UsersState) => state.errorMessage
    )
}