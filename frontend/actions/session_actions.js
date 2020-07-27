import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const signup = user => dispatch => (
    SessionAPI.signUp(user).then(user => dispatch(receiveCurrentUser(user)))
);

export const signin = user => dispatch => (
    SessionAPI.signIn(user).then(user => dispatch(receiveCurrentUser(user)))
);

export const signout = () => dispatch => (
    SessionAPI.signOut().then(() => dispatch(logoutCurrentUser()))
);