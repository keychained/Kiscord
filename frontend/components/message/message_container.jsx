import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Message from './message';
import { fetchChannels } from "../../actions/channel_actions";
import { fetchServers } from "../../actions/server_actions";
import { fetchMessages, createMessage } from "../../actions/message_actions";


const msp = state => ({
    channels: state.entities.channels,
    channelsList: Object.values(state.entities.channels),
    messages: Object.values(state.entities.messages),
    messages1: state.entities.messages,
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.message
});

const mdp = dispatch => ({
    getAllChannels: serverId => dispatch(fetchChannels(serverId)),
    getAllServers: () => dispatch(fetchServers()),
    getMessages: () => dispatch(fetchMessages()),
    createMessage: message => dispatch(createMessage(message))
});

export default withRouter(connect(msp, mdp)(Message));