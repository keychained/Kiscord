import { connect } from 'react-redux';
import Message from './message';
import { fetchChannels } from "../../actions/channel_actions";
import { fetchServers } from "../../actions/server_actions";


const msp = state => ({
    channels: state.entities.channels
});

const mdp = dispatch => ({
    getAllChannels: serverId => dispatch(fetchChannels(serverId)),
    getAllServers: () => dispatch(fetchServers()),
});

export default connect(msp, mdp)(Message);