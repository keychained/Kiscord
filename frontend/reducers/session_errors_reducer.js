import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_SESSION_ERRORS } from '../actions/session_actions';

const errorMsgs = {
    "Username can't be blank": 'username',
    "Email must include @ and a server domain": 'email',
    "Password is too short (minimum is 6 characters)": 'password'
}

const SessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    let newState = {};
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_ERRORS:
            if (action.errors[0] === "Invalid Email") {
                newState['email'] = 'Invalid Email'
                newState['password'] = 'Password does not match'
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