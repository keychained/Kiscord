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
        <div key={channel.id}><div key={channel.id}><Link id="channels-list" to={`/channels/${channel.server_id}/${channel.id}`}><div id="sign">#</div>{channel.title}</Link></div></div>
   ));
       return(
        <div>
            <div id="list-container">{channelsList}</div>
            <div id='add-server' onClick={() => this.props.openModal('channelCreate')}>+<span id='add-server-tip'>Create Channel</span></div>
            <div id='invite-code' onClick={() => this.props.openModal('inviteCode')}>Invite<span id='invite-code-tip'>Get Invite Code!</span></div>
            <div id='invite-code' onClick={() => this.props.openModal('serverLeave')}>Leave<span id='invite-code-tip'>Leave Server!</span></div>
            <div id='invite-code' onClick={() => this.props.openModal('serverDelete')}>Delete<span id='invite-code-tip'>Delete Server!</span></div>
        </div>
       )
   }
}

export default ChannelMain;