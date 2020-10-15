import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from '../actions/session_actions';

const errorMsgs = {
    "Username can't be blank": 'username',
    "Username has already been taken": 'username1',
    "Email must include @ and a server domain": 'email',
    "Email has already been taken": 'email1',
    "Password is too short (minimum is 6 characters)": 'password'
}

const SessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    let newState = {};
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_SESSION_ERRORS:
            if (action.errors[0] === "Email does not exist") {
                newState['email'] = action.errors[0]
            } else if (action.errors[0] === "Password does not match") {
                newState['password'] = action.errors[0]
            } else {
                action.errors.forEach(error => {
                    let key = errorMsgs[error]
                    newState[key] = error
                });
            }
            return newState;
        case CLEAR_SESSION_ERRORS:
            return [];
        default:
            return state;
    }
};

export default SessionErrorsReducer;