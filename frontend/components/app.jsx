import React from 'react';
import { 
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
 } from 'react-router-dom';
import LogInFormContainer from '../components/session/login_form_container';
import SignUpFormContainer from '../components/session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <h1>KISCORD TESTING</h1>
        <Switch>
            <AuthRoute exact path='/login' component={LogInFormContainer} />
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;