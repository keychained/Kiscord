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
            <div>
                <Link to='/login'>Login</Link>
            </div>
        )

        return (
            <div>
                {display}
            </div>
        )
    }
};

export default Greeting;