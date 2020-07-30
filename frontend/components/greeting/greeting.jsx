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
                <div id='home-background'>
                    {display}
                    <img id='logo' src={window.logo}></img>
                    <img id='background-left' src={window.backgroundLeft}></img>
                    <img id='background-right' src={window.backgroundRight}></img>
                    <img id='background-1' src={window.background1}></img>
                    <img id='background-2' src={window.background2}></img>
                    <img id='background-3' src={window.background3}></img>
                    <img id='background-4' src={window.background4}></img>
                    <img id='background-5' src={window.background5}></img>
                    <img id='background-6' src={window.background6}></img>
                    <img id='background-7' src={window.background7}></img>
                    <img id='background-8' src={window.background8}></img>
                    <img id='background-9' src={window.background9}></img>
                    <img id='background-10' src={window.background10}></img>
                    <img id='background-12' src={window.background12}></img>
                    <img id='background-building' src={window.backgroundBuilding}></img>
                    <img id='background-ship' src={window.backgroundShip}></img>
                    <img id='background-ship2' src={window.backgroundShip2}></img>
                    <img id='background-ship3' src={window.backgroundShip3}></img>
                    <img id='floating-pig' src={window.floatingPig}></img>
                </div>
            </div>
        )   
    }
};

export default Greeting;