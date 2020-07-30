import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import GreetingContainer from './greeting_container';

class Greeting extends React.Component {
    render() {
        const { currentUser, signout } = this.props

        const display = currentUser ? (
            <div>
                <button id='logout-btn' onClick={signout}>Logout</button>
            </div>
        ) : (
            <div id='login-btn'>
                <Link to='/login'>Login</Link>
            </div>
        )

        return (
            <div id='home'>
                <div id='test'>
                    {display}
                    <img id='logo' src={window.logo}></img>
                    <img id='background-left' src={window.backgroundLeft}></img>
                    <img id='background-right' src={window.backgroundRight}></img>
                    <img id='background-1' src={window.background1}></img>
                </div>
            </div>
        )   
    }
};

export default Greeting;