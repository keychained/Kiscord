import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';

const  RootReducer = combineReducers({
    users: UsersReducer,
    session: SessionReducer 
});

export default RootReducer;