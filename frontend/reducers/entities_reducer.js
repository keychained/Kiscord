import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ServerReducer from './servers_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    servers: ServerReducer
});

export default EntitiesReducer;