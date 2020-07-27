import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
    user: {
        username: '',
        email: '',
        password: ''
    },
    formType: 'Sign Up'
});

const mdp = dispatch => ({
    action: user => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);