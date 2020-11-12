import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import ChannelMain from "./channel_main";
import { fetchChannels, fetchChannel } from "../../actions/channel_actions"

const msp = (state, props) => ({
    errors: state.errors.channel,
    channels: Object.values(state.entities.channels),
    serverId: props.server.id,
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    getAllChannels: serverId => dispatch(fetchChannels(serverId)),
    getChannel: channelId => dispatch(fetchChannel(channelId))
})

export default withRouter(connect(msp, mdp)(ChannelMain));