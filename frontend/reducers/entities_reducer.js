import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ServerReducer from './servers_reducer';
import ChannelReducer from './channel_reducer';
import MessageReducer from './message_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    servers: ServerReducer,
    channels: ChannelReducer,
    messages: MessageReducer,
});

export default EntitiesReducer;