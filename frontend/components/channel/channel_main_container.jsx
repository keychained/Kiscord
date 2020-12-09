import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import ChannelMain from "./channel_main";
import { fetchChannels, fetchChannel } from "../../actions/channel_actions"
import { openModal } from '../../actions/modal_actions'

const msp = (state) => ({
    errors: state.errors.channel,
    channels: Object.values(state.entities.channels),
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    getAllChannels: serverId => dispatch(fetchChannels(serverId)),
    getChannel: channelId => dispatch(fetchChannel(channelId)),
    openModal: (modal) => dispatch(openModal(modal))
})

export default withRouter(connect(msp, mdp)(ChannelMain));