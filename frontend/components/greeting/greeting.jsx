import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import GreetingContainer from './greeting_container';

class Greeting extends React.Component {
    render() {
        const { currentUser, signout } = this.props

        const display = currentUser ? (
            <div id='log-btns'>
                <button id='logout-btn' onClick={signout}>Logout</button>
                <Link id='discord-btn' to='/channels/@me'>Open Discord</Link>
            </div>
        ) : (
            <div id='log-btns'>
                <div id='login-btn0'>
                    <Link to='/register'>Sign Up</Link>
                    <div id='login-btn1'>
                    <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        )

        return (
            <>
                <div id='home-background'>
                    {display}
                    <div id='nav'>
                        <a href></a>
                    </div>
                    <h1 id='homepage-welcome1'>Your place to Talk</h1>
                    <p id='homepage-welcome2'>Kiscord makes talking to your friends easier!</p>
                    <Link to='/'><img id='logo' src={window.logo}></img></Link>
                    <img id='diamond' src={window.diamond}></img>
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
                <div id='chilling1'>
                    <div id='chilling1-container'>
                        <img id='background-chilling1' src={window.backgroundChilling1}></img>
                        <div id='chilling1-welcome-container'>
                            <h1 id='chilling1-welcome'>An Invite-only place with plenty of room to talk</h1>
                            <h2 id='chilling1-welcome2'>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</h2>
                        </div>
                    </div>
               </div>
               <div id='chilling2'>
                    <div id='chilling2-container'>
                        <div id='chilling2-welcome-container'>
                            <h1 id='chilling2-welcome'>Where hanging out is easy</h1>
                            <h2 id='chilling2-welcome2'>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</h2>
                        </div>
                        <img id='background-chilling2' src={window.backgroundChilling2}></img>
                    </div>
               </div>
                <div id='chilling3'>
                    <div id='chilling3-container'>
                        <img id='background-chilling3' src={window.backgroundChilling3}></img>
                        <div id='chilling3-welcome-container'>
                            <h1 id='chilling3-welcome'>From a few to a fandom</h1>
                            <h2 id='chilling3-welcome2'>Get a community of any size running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</h2>
                        </div>
                    </div>
                </div>
                <div id='chilling4'>
                    <div id='chilling4-container'>
                        <div id='chilling4-welcome-container'>
                            <h1 id='chilling4-welcome'>Reliable tech for staying close</h1>
                            <h2 id='chilling4-welcome2'>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</h2>
                        </div>
                        <img id='background-chilling4' src={window.backgroundChilling4}></img>
                        <div id='end-background'>
                        <div id='background-end'>
                            <h1>Ready to start your journey?</h1>
                        </div>
                        </div>
                            <div id='end-login'>
                                <Link id='end-login-text' to='/register'>Sign Up</Link>
                            </div>
                            <div id='nav2-bar'>
                                <div id='nav2'>
                                    <Link id='nav-btn2' to='/'>Download</Link>
                                    <Link id='nav-btn2' to='/login'>Why Discord?</Link>
                                    <Link id='nav-btn2' to='/register'>Nitro</Link>
                                    <Link id='nav-btn2' to='/login'>Safety</Link>
                                    <Link id='nav-btn2' to='/'>Support</Link>
                                    <Link to='/'><img id='logo2' src={window.logo}></img></Link>
                                </div>
                            </div>
                    </div>
                </div>
            </>
        )
    }
};

export default Greeting;