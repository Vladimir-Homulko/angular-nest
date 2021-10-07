import { createSelector } from '@ngrx/store';
import { UsersState } from './../reducers/user.reducers';
import { createFeatureSelector } from '@ngrx/store';


export namespace UserSelectors {
    
    export const userStateSelect = createFeatureSelector<UsersState>('users');
    
    export const getUsersSelect = createSelector(
        userStateSelect,
        (state: UsersState) => state.users
    )
}