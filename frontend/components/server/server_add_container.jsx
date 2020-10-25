import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import ServerAdd from "./server_add";

const msp = state => ({
})

const mdp = dispatch => ({
    openModal: () => dispatch(openModal('serverAdd')),
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(ServerAdd)