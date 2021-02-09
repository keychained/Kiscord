import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { deleteServer, clearServerErrors } from '../../actions/server_actions';
import ServerDelete from "./server_delete";

const msp = (state, ownProps) => ({
    servers: state.entities.servers,
    errors: state.errors.server
})

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    deleteServer: serverId => dispatch(deleteServer(serverId)),
    clearErrors: () => dispatch(clearServerErrors([]))
});

export default connect(msp, mdp)(ServerDelete);