import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import GreetingContainer from './greeting_container';

class Greeting extends React.Component {
    render() {
        const { currentUser, signout } = this.props

        const display = currentUser ? (
            <div>
                <button onClick={signout}>Logout</button>
            </div>
        ) : (
            <div id='login-btn'>
                <Link to='/login'>Login</Link>
            </div>
        )

        return (
            <div>
                <img id='logo' src={window.logo}></img>
                {display}
            </div>
        )   
    }
};

export default Greeting;