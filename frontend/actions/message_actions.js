import * as MessageAPI from '../util/message_api_util';

export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS'
export const CLEAR_MESSAGE_ERRORS = 'CLEAR_MESSAGE_ERRORS'

const receiveAllMessages = messages => ({
    type: RECEIVE_ALL_MESSAGES,
    messages
});

const receiveMessage = message => ({
    type: RECEIVE_MESSAGE,
    message
});

export const receiveMessageErrors = errors => ({
    type: RECEIVE_MESSAGE_ERRORS,
    errors
});

export const clearMessageErrors = () => ({
    type: CLEAR_MESSAGE_ERRORS
})

export const fetchMessages = () => dispatch => (
    MessageAPI.fetchMessages().then(messages => dispatch(receiveAllMessages(messages))).fail(errors => dispatch(receiveMessageErrors(errors.responseJSON)))
);

export const createMessage = message => dispatch => (
    MessageAPI.createMessage(message).then(message => dispatch(receiveMessage(message))).fail(errors => dispatch(receiveMessageErrors(errors.responseJSON)))
);