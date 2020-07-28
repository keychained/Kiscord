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
import GreetingContainer from '../components/greeting/greeting_container';

const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={GreetingContainer} />
            <AuthRoute exact path='/login' component={LogInFormContainer} />
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;