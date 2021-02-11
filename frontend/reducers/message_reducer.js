import { RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';

const MessageReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ALL_MESSAGES:
            return action.messages;
        case RECEIVE_MESSAGE:
            return Object.assign({}, newState, { [action.message.id]: action.message })
        default:
            return state;
    }
}

export default MessageReducer;