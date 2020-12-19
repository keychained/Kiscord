import ChannelCreate from './channel_create';
import { connect } from 'react-redux';
import { createChannel, receiveChannelErrors, fetchChannels } from '../../actions/channel_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const last = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
const secondLast = window.location.href.substr(window.location.href.lastIndexOf('/', window.location.href.lastIndexOf('/', window.location.href.lastIndexOf('/') - 1)) + 1).split('/')[0]
const secondId = parseInt(secondLast)
const serverId = parseInt(last)

const final = Number.isInteger(serverId) && Number.isInteger(secondId) ? secondLast : Number.isInteger(serverId) || Number.isInteger(secondId) ? last : ""

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.channel,
    channels: Object.values(state.entities.channels),
    currentServer: final
});

const mdp = dispatch => ({
    getAllChannels: serverId => dispatch(fetchChannels(serverId)),
    createChannel: channel => dispatch(createChannel(channel)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    clearChannelErrors: () => dispatch(receiveChannelErrors([]))
});

export default connect(msp, mdp)(ChannelCreate);