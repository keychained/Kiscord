import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import { signin, receiveSessionErrors, demouser } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
    errors: state.errors.session,
    formType: 'Welcome back!'
});

const mdp = dispatch => ({
    action: user => dispatch(signin(user)),
    demo: () => dispatch(demouser()),
    clearErrors: () => dispatch(receiveSessionErrors([]))
});

export default withRouter(connect(msp, mdp)(SessionForm));