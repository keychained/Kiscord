import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from "../../actions/modal_actions";
import { joinServer, receiveServerErrors } from '../../actions/server_actions';
import ServerJoin from "./server_join";

const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.server
})

const mdp = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    joinServer: inviteCode => dispatch(joinServer(inviteCode)),
    clearServerErrors: () => dispatch(receiveServerErrors([]))
});

export default withRouter(connect(msp, mdp)(ServerJoin));