import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import { receiveChannelErrors } from '../../actions/channel_actions';
import ChannelAdd from "./channel_add";

const msp = state => ({
})

const mdp = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    clearChannelErrors: () => dispatch(receiveChannelErrors([]))
});

export default connect(msp, mdp)(ChannelAdd)