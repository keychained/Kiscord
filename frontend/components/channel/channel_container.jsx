import { connect } from "react-redux";
import ChannelMain from "./channel";
import { fetchChannels, fetchChannel } from "../../actions/channel_actions"

const msp = state => ({
    errors: state.errors.channel,
    channels: Object.values(state.entities.channels),
});

const mdp = dispatch => ({
    getAllChannels: serverId => dispatch(fetchChannels(serverId)),
    getChannel: channelId => dispatch(fetchChannel(channelId))
})

export default connect(msp, mdp)(ChannelMain);