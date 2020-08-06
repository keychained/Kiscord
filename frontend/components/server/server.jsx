import React from 'react';
import ServerContainer from './server_container';
import { ProtectedRoute } from '../../util/route_util';
import { Link } from 'react-router-dom';

class Server extends React.Component {
    constructor(props) {
        super(props);
   }

   render() {
    const { currentUser, signout } = this.props
       return(
            <div id='server-background'>
               <img id='no-friends' src={window.noFriends}></img>
                <div id='server-bar'>
                   <Link id='logo-cont' to='/channels/@me'><img id='logo-only' src={window.logoOnly}></img><span id='logo-tip'>Home</span></Link>
                </div>
                    <div id='message-bar'>
                        <input id='find-convo' type="text" placeholder='Find or start a conversation'></input>
                            <div id='user-bar'>
                                <img id='logo-only2' src={window.logoOnly}></img>
                                <p id='username'>{currentUser.username}</p>
                                <i id='gear-icon' onClick={signout} className="fa fa-gear fa-lg"><span id='gear-tip'>Logout</span></i>
                            </div>
                    </div>
            </div>
       )
   }
}

export default Server;