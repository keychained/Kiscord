import { RECEIVE_ALL_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from '../actions/server_actions';

const ServerReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ALL_SERVERS:
            return action.servers
        case RECEIVE_SERVER:
            return Object.assign({}, newState, { [action.server.server.id]: action.server.server })
        case REMOVE_SERVER:
            delete newState[action.serverId];
            return newState
        default:
            return state;
    }
};

export default ServerReducer;