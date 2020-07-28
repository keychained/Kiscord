import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signin, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
    errors: state.errors.session,
    formType: 'Welcome back!'
});

const mdp = dispatch => ({
    action: user => dispatch(signin(user)),
    clearErrors: () => dispatch(receiveErrors())
});

export default connect(msp, mdp)(SessionForm);