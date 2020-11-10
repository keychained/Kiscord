import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import ServerErrorsReducer from './server_errors_reducer';
import ChannelErrorsReducer from './channel_error_reducer';

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    server: ServerErrorsReducer,
    channel: ChannelErrorsReducer
});

export default ErrorsReducer