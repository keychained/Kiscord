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
import ServerMainContainer from '../components/server/server_main_container';
import Modal from './modal/modal';


const App = () => (
    <div>
        <Modal/>
        <Switch>
            <Route exact path='/' component={GreetingContainer} />
            <AuthRoute exact path='/login' component={LogInFormContainer} />
            <AuthRoute exact path='/register' component={SignUpFormContainer} />
            <ProtectedRoute exact path='/channels/@me' component={ServerMainContainer} />
            <ProtectedRoute exact path={'/channels/:server_id'} component={ServerMainContainer} />
        </Switch>
    </div>
);

export default App;