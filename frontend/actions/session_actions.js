import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

 const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
});

export const signup = user => dispatch => (
    SessionAPI.signUp(user).then(user => dispatch(receiveCurrentUser(user))).fail((errors) => dispatch(receiveSessionErrors(errors.responseJSON)))
);

export const signin = user => dispatch => (
    SessionAPI.signIn(user).then(user => dispatch(receiveCurrentUser(user))).fail((errors) => dispatch(receiveSessionErrors(errors.responseJSON)))
);

export const signout = () => dispatch => (
    SessionAPI.signOut().then(() => dispatch(logoutCurrentUser())).fail((errors) => dispatch(receiveSessionErrors(errors.responseJSON)))
);

export const demouser = () => dispatch => (
    SessionAPI.demoUser().then((user) => dispatch(receiveCurrentUser(user)))
);


