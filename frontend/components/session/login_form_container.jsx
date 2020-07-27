import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
    user: state.user,
    formType: 'Sign In'
});

const mdp = dispatch => ({
    action: user => dispatch(signin(user))
});

export default connect(msp, mdp)(SessionForm);