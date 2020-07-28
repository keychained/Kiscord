import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const signup = user => dispatch => (
    SessionAPI.signUp(user).then(user => dispatch(receiveCurrentUser(user))).fail((error) => dispatch(receiveErrors(error.responseJSON)))
);

export const signin = user => dispatch => (
    SessionAPI.signIn(user).then(user => dispatch(receiveCurrentUser(user))).fail((error) => dispatch(receiveErrors(error.responseJSON)))
);

export const signout = () => dispatch => (
    SessionAPI.signOut().then(() => dispatch(logoutCurrentUser())).fail((error) => dispatch(receiveErrors(error.responseJSON)))
);