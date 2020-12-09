import ChannelCreate from './channel_create';
import { connect } from 'react-redux';
import { createChannel, receiveChannelErrors, fetchChannels } from '../../actions/channel_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.channel,
    channels: Object.values(state.entities.channels),
});

const mdp = dispatch => ({
    getAllChannels: serverId => dispatch(fetchChannels(serverId)),
    createChannel: channel => dispatch(createChannel(channel)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    clearChannelErrors: () => dispatch(receiveChannelErrors([]))
});

export default connect(msp, mdp)(ChannelCreate);