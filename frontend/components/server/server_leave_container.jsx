import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { leaveServer, clearServerErrors } from '../../actions/server_actions';
import ServerLeave from "./server_leave";

const msp = (state, ownProps) => ({
    servers: state.entities.servers,
    errors: state.errors.server
})

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    leaveServer: serverId => dispatch(leaveServer(serverId)),
    clearErrors: () => dispatch(clearServerErrors([]))
});

export default connect(msp, mdp)(ServerLeave);