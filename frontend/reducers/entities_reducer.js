import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ServerReducer from './servers_reducer';
import ChannelReducer from './channel_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    servers: ServerReducer,
    channels: ChannelReducer,
});

export default EntitiesReducer;