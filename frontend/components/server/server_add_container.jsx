import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import { receiveServerErrors } from '../../actions/server_actions';
import ServerAdd from "./server_add";

const msp = state => ({
})

const mdp = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    clearServerErrors: () => dispatch(receiveServerErrors([]))
});

export default connect(msp, mdp)(ServerAdd)