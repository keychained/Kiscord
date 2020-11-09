import { RECEIVE_SERVER, RECEIVE_SERVER_ERRORS, CLEAR_SERVER_ERRORS } from '../actions/server_actions';

const ServerErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SERVER:
            return ["Server Creation Successful!"];
        case RECEIVE_SERVER_ERRORS:
            return action.errors
        case CLEAR_SERVER_ERRORS:
            return [];
        default:
            return state;
    }
};

export default ServerErrorsReducer;