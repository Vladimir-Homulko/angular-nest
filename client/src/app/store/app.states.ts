import * as auth from './reducers/auth.reducers';
import * as user from './reducers/user.reducers';

export interface AppState {
      authState: auth.State;
      userState: user.UsersState;
}