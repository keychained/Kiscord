import React from "react";
import { Link } from 'react-router-dom';
import { ProtectedRoute, Route } from "../../util/route_util";

class ChannelMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

   componentDidMount() {
        this.props.getAllChannels(this.props.match.params.server_id);
   }

   componentDidUpdate(prevProps, prevState) {
       if (prevProps.match.params.server_id !== this.props.match.params.server_id) {
        this.props.getAllChannels(this.props.match.params.server_id);
       };
   }

   render() {
       const { channels } = this.props;
       const channelsList = channels.map(channel => (
        <div key={channel.id}><p key={channel.id}><Link to={`/channels/${channel.server_id}/${channel.id}`}>{channel.title}</Link></p></div>
   ));
       return(
        <div>
            <div>{channelsList}</div>
            <div id='add-server' onClick={() => this.props.openModal('channelAdd')}>+<span id='add-server-tip'>Add a Channel</span></div>
        </div>
       )
   }
}

export default ChannelMain;