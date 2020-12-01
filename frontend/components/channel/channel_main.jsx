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

   render() {
       const last = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
       const channelId = parseInt(last);
       const { channels } = this.props;
       const channelsList = channels.map(channel => (
        <div key={channel.id}><p key={channel.id}><Link to={`/channels/${channel.server_id}/${channel.id}`}>{channel.title}</Link></p></div>
   ));
        const listLength = channelsList.length
       return(
        <div>
           {listLength > 0 ? (<div>{channelsList}</div>) : ""}
        </div>
       )
   }
}

export default ChannelMain;