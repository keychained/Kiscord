import React from 'react';
import { Route } from 'react-router-dom';
import LogInFormContainer from '../components/session/login_form_container';
import SignUpFormContainer from '../components/session/signup_form_container';

const App = () => (
    <>
    <div>
        <h1>KISCORD WORKS!</h1>
        <LogInFormContainer />
        <SignUpFormContainer />
    </div>
    </>
);

export default App;