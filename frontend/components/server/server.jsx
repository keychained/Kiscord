import React from 'react';
import ServerContainer from './server_container';
import { ProtectedRoute } from '../../util/route_util';

class Server extends React.Component {
    constructor(props) {
        super(props);
   }

   render() {
       return(
            <div id='server-background'>
                <h1>SERVER TEST PAGE</h1>
            </div>
       )
   }
}

export default Server;