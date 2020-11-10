import { RECEIVE_ALL_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';

const ChannelReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ALL_CHANNELS:
            return action.channels
        case RECEIVE_CHANNEL:
            return Object.assign({}, newState, { [action.channel.id]: action.channel })
        case REMOVE_CHANNEL:
            delete newState[action.serverId];
            return newState
        default:
            return state;
    }
};

export default ChannelReducer;