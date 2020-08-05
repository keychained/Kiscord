import React from 'react';
import ServerContainer from './server_container';
import { ProtectedRoute } from '../../util/route_util';
import { Link } from 'react-router-dom';

class Server extends React.Component {
    constructor(props) {
        super(props);
   }

   render() {
       return(
            <div id='server-background'>
                <div id='server-bar'>
                   <Link to='/channels/@me'><img id='logo-only' src={window.logoOnly}></img></Link>
                </div>
                <div id='message-bar'>
                    <input id='find-convo' type="text" placeholder='Find or start a conversation'></input>
                </div>
            </div>
       )
   }
}

export default Server;