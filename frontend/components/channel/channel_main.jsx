import React from "react";
import { Link } from 'react-router-dom';
import { ProtectedRoute, Route } from "../../util/route_util";

class ChannelMain extends React.Component {
    constructor(props) {
        super(props)

    }

   componentDidMount() {
    this.props.getAllChannels(this.props.match.params.server_id)
   }

   render() {
       const { channels } = this.props;
       const channelsList = channels.map(channel => (
        <div key={channel.id}><p key={channel.id}><Link to={`/channels/${channel.server_id}/${channel.id}`}>{channel.title}</Link></p></div>
   ));
       return(
        <div>{channelsList}</div>
       )
   }
}

export default ChannelMain;