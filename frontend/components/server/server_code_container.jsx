import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import ServerCode from "./server_code";

const msp = state => ({
    servers: state.entities.servers
})

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(ServerCode);