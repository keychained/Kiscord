import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Message from './message';
import { fetchChannels } from "../../actions/channel_actions";
import { fetchServers } from "../../actions/server_actions";


const msp = state => ({
    channels: state.entities.channels,
    channelsList: Object.values(state.entities.channels),
});

const mdp = dispatch => ({
    getAllChannels: serverId => dispatch(fetchChannels(serverId)),
    getAllServers: () => dispatch(fetchServers()),
});

export default withRouter(connect(msp, mdp)(Message));