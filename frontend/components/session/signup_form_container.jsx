import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, receiveSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
    errors: state.errors.session,
    formType: 'Create an account'
});

const mdp = dispatch => ({
    action: user => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveSessionErrors([]))
});

export default connect(msp, mdp)(SessionForm);